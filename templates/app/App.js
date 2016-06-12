import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  Link,
} from 'reactors';

export default class App extends Component {
  render() {
    const platforms = [
      {
        title: 'Web',
        image: 'https://developer.blackberry.com/html5/webroot/img/html5_40x40.png',
        link: 'https://www.w3.org/TR/html5/'
      },
      {
        title: 'iOS',
        image: 'https://www.unifiedremote.com/content/logos/Apple.png',
        link: 'http://www.apple.com/ios/'
      },
      {
        title: 'Android',
        image: 'http://www.killerpokies.com/images/android-list.png',
        link: 'https://www.android.com/'
      },
      {
        title: 'Mac OSX',
        image: 'http://www.mucommander.com/gfx/icon_osx.gif',
        link: 'http://www.apple.com/osx/',
      },
      {
        title: 'Linux',
        image: 'https://www.yugma.com/images/linux.png',
        link: 'http://www.ubuntu.com/'
      },
      {
        title: 'Windows',
        image: 'https://apps.education.ucsb.edu/w/images/thumb/a/a7/Windows_vista_icon.png/40px-Windows_vista_icon.png',
        link: 'http://www.microsoft.com/en-us/windows'
      }
    ];

    return (
      <View style={styles.view}>
        <Text style={styles.h1}>{app}</Text>
        <Text style={styles.text}>Welcome to your Reactors app</Text>
        <Text style={styles.text}>This app will work in:</Text>
        <ListView
          dataSource={platforms}
          renderRow={this._renderPlatform}
          />
        <Link href="https://github.com/co2-git/reactors">
          <Text style={[styles.text, styles.link]}>Reactors Doc</Text>
        </Link>
      </View>
    );
  }

  _renderPlatform = (platform) => {
    return (
      <View style={styles.platformRow}>
        <Image source={platform.image} style={styles.image} />
        <Link href={platform.link}>
          <Text style={styles.link}>{platform.title}</Text>
        </Link>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  view: {
    marginTop: 42,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    margin: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  platformRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  link: {
    color: 'blue',
  }
});
