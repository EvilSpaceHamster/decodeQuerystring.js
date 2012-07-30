decodeQuerystring.js
====================

Simple URI query to Javascript Object decoder

Takes any URI encoded Querystring as a parameter
```javascript
decodeQuerystring("parameter=equalsIs%3D&parameter2=eleveb");
```
should return
```javascript
{
	"parameter" : "equalsIs=",
	"parameter2": "eleveb"
}
```