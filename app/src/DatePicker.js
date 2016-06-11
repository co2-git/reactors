import React, {Component, Element, PropTypes} from 'react';
import {
  DatePickerIOS,
  DatePickerAndroid,
  TimePickerAndroid,
  Text,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import moment from 'moment';
import Reactors from 'reactors';

type PROPS = {
  mode?: 'date' | 'datetime' | 'time',
  date?: Date | ?string,
  onOpen?: () => void,
  onPick?: (date: moment.Moment) => void,
  onCancel?: () => void,
  containerStyle?: any,
  labelStyle?: any,
};

type STATE = {
  show: boolean,
  date: ?Date | string,
};

export default class DatePicker extends Component {
  static propTypes = {};

  static defaultProps: PROPS = {
    mode: 'date',
  };

  state: STATE = {
    show: false,
    date: this.determineDateFromProps(),
  };

  determineDateFromProps(): ?Date {
    if (this.props.date instanceof Date) {
      return this.props.date;
    }

    if (typeof this.props.date === 'string') {
      return new Date(this.props.date);
    }
  }

  onOpen = (): void => {
    const {onOpen} = this.props;
    if (typeof onOpen === 'function') {
      onOpen();
    }
  };

  onDateChange = (date: Date): void => {
    this.setState({date});
  };

  onPick = (date: Date): void => {
    if (typeof this.props.onPick === 'function') {
      this.props.onPick(date);
    }
  };

  toggle = (): void => {
    const {show} = this.state;
    if (!show) {
      this.onOpen();
    }
    this.setState({show: !this.state.show});
    if (Platform.OS === 'android') {
      // TODO this only shows when this is supposed to be a toggler
      this.showDatePickerAndroid();
    }
  };

  // IOS only
  pick = (): void => {
    this.setState({show: false});
    this.onPick(moment(this.state.date));
  };

  cancel = (): void => {
    this.setState({show: false, date: null});
    const {onCancel} = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  async showDatePickerAndroid(options: Object = {}): void {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        this.cancel();
      } else {
        const date = new Date(year, month, day);
        this.setState({date});
        if (this.props.mode === 'datetime') {
          await this.showTimePickerAndroid();
        } else {
          this.onPick(moment(this.state.date));
        }
      }
    } catch (error) {
      console.warn(error);
    }
  }

  async showTimePickerAndroid(options: Object = {}): void {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      if (action === TimePickerAndroid.dismissedAction) {
        this.cancel();
      } else {
        const date = moment(this.state.date).set({hour, minute});
        this.setState({date});
        this.onPick(moment(this.state.date));
      }
    } catch (error) {
      console.warn(error);
    }
  }

  render(): Element {
    const props = {...this.props};

    switch (Reactosrs.platform) {
    case 'web':
      return <input type="date" {...props} />;
    case 'mobile':
      return (
        <View>
          {this._renderTextInput()}
          {this._renderDatePickerIOS()}
        </View>
      );
    }
  }

  _renderTextInput(): ?Element {
    return this.state.show && (
      <View style={this.props.containerStyle}>
        <Text onPress={this.toggle} style={this.props.labelStyle}>
          {this._displayDate()}
        </Text>
      </View>
    );
  }

  _displayDate(): string {
    const {date} = this.state;
    if (date) {
      const format = {
        date: 'YYYY-MM-DD',
        datetime: 'YYYY-MM-DD h:mm A',
        time: 'h:mm A',
      }[this.props.mode];
      return moment(date).format(format);
    }
    return this._displayDatePlaceholder();
  }

  _displayDatePlaceholder(): string {
    return {
      date: '----/--/--',
      datetime: '----/--/-- --:-- --',
      time: '--:-- --',
    }[this.props.mode];
  }

  _renderDatePickerIOS(): ?Element {
    if (this.state.show && Platform.OS === 'ios') {
      return (
        <View style={localStyle.picker_wrapper}>
          <DatePickerIOS
            date={this.state.date || new Date()}
            mode={this.props.mode}
            onDateChange={this.onDateChange}
          />

          <View style={modal.footer_link_row}>
            <Link
              onPress={this.cancel}
              style={modal.footer_link}>
              CANCEL
            </Link>

            <Link
              onPress={this.pick}
              style={modal.footer_link}>
              PICK
            </Link>
          </View>
        </View>
      );
    }
  }
}

const localStyle = StyleSheet.create({
  picker_wrapper: {
    backgroundColor: 'white',
  }
});
