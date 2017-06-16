## Layout
  /aws/             => Code As Infrastructure
  /src/             => App
      /pages/       => top level components (entry points)
      /lib/         => data fetching and transformation helpers
      /components/  => standalone and "pure" components
  /test/            => Endpoint Test    

## Measurement
```javascript
  console.time('measure')
  function(){...}
  console.timeEnd('done')
```


## CSS Animation

```css
.element {
  transition: [property] [duration] [ease] [delay] ;
}
.example {
  transition: opacity 300ms ease-in-out 1s;
}
.animationClass {
  amination: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];
}
```

- Things To Note
  - position
  - scale
  - rotation
  - opacity
  # If you animate anything else, its at your own risk, and the chances are you are not going to hit a smooth 60fps


## TODO list
  - WAIT
    - [ ] http://hammerjs.github.io/

    - [ ] [CSS](https://kknews.cc/tech/lzvr55e.html)
    - [ ] Cal
    - [ ] Route
      - Styled Input
      - Login / Logout
      - POST /api/users
      - re route if there is token
        - success => {token: 'aaa.bbb.ccc' }
        - fail    => {error: 'invalid token'}
      - page
    - [ ] [SEO](https://medium.com/asiayo-engineering/四大-seo-內功心法-讓我們的-seo-流量爆炸性成長-30-倍-c186f384f51a)
    - [ ] [SEO](http://schema.org/)
    - [ ] [結構化資料標記協助工具](https://www.google.com/webmasters/markup-helper/u/0/)
    - [ ] [microdatagenerator](http://www.microdatagenerator.com/get-started/)
    - [ ] [測試工具：結構化資料測試工具](https://search.google.com/structured-data/testing-tool/u/0/)
    - [ ] [Mobile Friendly Test From Google](https://search.google.com/test/mobile-friendly) [BreadcrumbList](https://developers.google.com/search/docs/guides/enhance-site#enable-breadcrumbs)
    - [ ] [SiteNavigationElement](https://schema.org/SiteNavigationElement)
    - [ ] [SearchAction](https://schema.org/SearchAction)
    - [ ] [SEO Slide](https://drive.google.com/file/d/0B8AejH5fMRCJR284bTZObi10aFk/view)
    - [ ] [Google to Index Your New Website & Blog Quickly](https://blog.kissmetrics.com/get-google-to-index/)


    - [ ] NPM => prop-types
    - [ ] React Story Book
    - [ ] Single Sign On
    - [ ] Images For Server side

  - DONE
    - [X] CSS Animation
    - [X] CSS viewpoint
    - [X] Boot up speed with React
      - [boost performance of your React app](https://www.youtube.com/watch?v=7lbhI80e-LA)
      - .balbelrc
        - "transform-react-constant-elements"
        - "transform-react-inline-elements"
        - "transform-react-remove-prop-types"
        - "transform-react-pure-class-to-function"
    - [X] Add Saga
    - [X] [Add Normalize.css](https://necolas.github.io/normalize.css/)
    - [X] Vender.js VS Bundle.js
    - [X]
      - [react-helmet](https://github.com/nfl/react-helmet)
      - [react-helmet-example](https://github.com/mattdennewitz/react-helmet-example/blob/master/components/About.js)

    - [X] [HEAD](https://github.com/nfl/react-helmet)
      - [X] Server Static file to client
    - [X] Add CI-CD Tool
    - [X] Webpack For Both development and Production
    - [X] Speend Up Server Side Rendering
      - .babelrc
        - "plugins" : ["transform-react-constant-elements", "transform-react-inline-elements"]

## Useful AWS EC2 command
  - CheckRunningNode:
    - ps -ef
  - KillByPID:
    - kill PID
  - Redirect:
    - sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 9000
  - ShowAllNodejs:
    - ps ax | grep nodejs
