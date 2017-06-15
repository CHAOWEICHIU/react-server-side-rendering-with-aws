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

## Endpoint
  /products/:id
    GET
    {
      title: '來一趟調酒世界的奇幻旅程吧',
      description: '在繁忙工作之餘小酌一杯，享受一下屬於自己的悠閒時光，已是現代人生活中不可或缺的小確幸。繁燈初上，你發現了新的秘密基地，找到了新的體驗，開啟了調酒的奇幻旅程…Old Fashion、Manhattan、Negroni、Alexander、Margarita…你在旅程的路上遇到了一個個充滿故事的寶藏，也好奇背後的故事。航行需要方向，DUO Taipei 幫您準備了航行的地圖，讓你了解寶藏背後的故事，從今以後對於調酒世界的大小寶藏瞭若指掌。六月份的調酒課，講師 Michael 將帶領各位回到調酒文化最為興盛的 19 世紀，又稱調酒的 "Golden Age" 。調酒體驗課程將帶著你認識六大基酒（Whisky、Gin、Brandy、Vodka、Rum、Tequila）， 並將它們背後的故事娓娓道來。課堂上也會現場示範帶領每位學員進行調酒實作，讓您感受親手調製的樂趣喔！藉由如此扎實又有趣的體驗課程，在您下一次進行調酒探險時，將可以更了解今天的心情該來點什麼酒？您的朋友正在品飲的是哪款調酒？Bartender 在調製時又展現了什麼樣的技巧與巧思？您將沈醉於調酒深厚而美妙的文化底蘊，而最重要的是，您可以與三五好友分享調酒的樂趣。'
      location: '新北市',
      time:  '2.5',
      startPrice: '1920',
      products: [
        {
          title: 'DUO Taipei 吧台的調酒課',
          availabilities: [
            {
              date: '2017-06-22',
              dayOfTheWeek: '四'
              timeRanges: [
                {
                  timeFrom: '10:00',
                  timeEnd: '12:00',
                  meridiem: 'AM',
                  items: [
                    {
                      name: '單人 ( 12 歲以上 )',
                      quantity:
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]



    }


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

    - [ ] CSS Animation
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
