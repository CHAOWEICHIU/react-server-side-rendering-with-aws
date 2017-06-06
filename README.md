## TODO list
  - WAIT
    - [ ] Images For Server side
    - [ ] NPM => prop-types
    - [ ] Create element, parse
    - [ ] [Add Normalize.css](https://necolas.github.io/normalize.css/)
    - [ ] React Story Book
    - [ ] Single Sign On

  - DONE
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
