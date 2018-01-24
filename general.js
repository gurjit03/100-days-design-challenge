import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "body": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif",
        "lineHeight": 1
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "article": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif",
        "display": "block"
    },
    "section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif",
        "display": "block"
    },
    "main": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 16,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "fontFamily": "'Open Sans', sans-serif",
        "display": "flex",
        "textAlign": "center",
        "position": "relative",
        "minHeight": 50,
        "alignItems": "center",
        "justifyContent": "center",
        "color": "rgba(255, 255, 255, 0.9)"
    },
    "footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "'Open Sans', sans-serif",
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "ol": {
        "listStyle": "none"
    },
    "ul": {
        "listStyle": "none"
    },
    "blockquote": {
        "quotes": "none"
    },
    "q": {
        "quotes": "none"
    },
    "blockquote:before": {
        "content": "none"
    },
    "blockquote:after": {
        "content": "none"
    },
    "q:before": {
        "content": "none"
    },
    "q:after": {
        "content": "none"
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "logo": {
        "fontFamily": "'Lobster Two', cursive",
        "fontWeight": "600",
        "display": "inline-block",
        "textAlign": "left",
        "cursor": "pointer",
        "fontSize": 20,
        "position": "absolute",
        "left": 0
    },
    "logo-hash": {
        "textDecoration": "none",
        "display": "inline-block",
        "fontSize": 24,
        "transition": "transform 0.25s linear"
    },
    "logo-text": {
        "borderBottom": "1px solid rgba(255, 255, 255, 0.9)"
    },
    "logo:hover > logo-hash": {
        "transform": "rotate(90deg)"
    },
    "logo:hover > logo-text": {
        "transform": "scale(1.1)"
    },
    "header-text": {
        "display": "inline-block",
        "fontSize": 24
    },
    "challenge-number": {
        "fontFamily": "'Boogaloo', cursive"
    }
});