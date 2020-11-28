# Express-generator

This is express-generator sample project.  
This implement basic rest api.   
So, more information, Please refer to
[this blog](https://medium.com/@final.lee) 


## Definition

- #### Express
   express는 라우팅과 미들웨어로 구성된 프레임워크이다.   
   express 애플리케이션은 본질적으로 미들웨어 함수의 연속으로 이루어져있다.   
   
- #### Middleware
    middleware는 클라이언트 요청을 처리하여 응답하는 과정사이를 거쳐가는 함수.   
    middleware 구성: middleware [HTTP Method] (path, function(req, res, next)) {}
