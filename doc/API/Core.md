Core API
===

# `platform: 'mobile'|'web'|'desktop'`

The name of the platform. **Please note that, at this stage of development, this returns null during init time**. It needs for example to be wrapped into a function.

# `translateProps: ObjectOfProps`

```javascript
<MyComponent {...Reactors.translateProps(this.props)} />
```

For the moment, it makes sure the style attribute is cross-platform.
