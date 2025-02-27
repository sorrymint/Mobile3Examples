# Unit 5 Day 2

## Dependances 

* [Spring Data MongoDB](https://docs.spring.io/spring-boot/docs/3.2.5/reference/htmlsingle/index.html#data.nosql.mongodb)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.2.5/reference/htmlsingle/index.html#web)
* [Lemok]()

## DB

* Make DB called `Quiz`
* Make Document called `questions`
* load JSON data in `/data/questions.json` into the MongoDB

## Test API

Run the following CURLs. You will need to change the ID in the POST request. 

```http request
###
GET http://localhost:8080/quiz/start

###
POST http://localhost:8080/quiz/submit
Content-Type: application/json

{
  "questionId": "66338f437e5448b6079c2716",
  "answer": "A framework for building mobile applications using JavaScript and React."
}
```



