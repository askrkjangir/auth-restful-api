# auth-restful-api
<h1>Authentication & role based REST api access using Node.js, Express, JWT and MySQL</h1>

<p>This is a basic example of role based restful api access and authentication.</p>

<h2>Installation</h2>
<p>
1. Clone or download this repository to your system<br>
2. If you have downloaded zip, extract the zip file<br>
3. Go to the repository directory in terminal and run the following command
</p>
<pre>npm install</pre>
<h2>Database</h2>
<p>You will need to create the sample database required for this application. Import <a href="https://github.com/askrkjangir/auth-restful-api/blob/master/app.sql">app.sql</a> in MySQL workbench or mysql command line tool.</p>
<p>Edit <a href="https://github.com/askrkjangir/auth-restful-api/blob/master/utils/connectionFactory.js">utils/connectionFactory.js</a> to change database configuration.</p>
<h2>Configurations</h2>
<p>Edit <a href="https://github.com/askrkjangir/auth-restful-api/blob/master/config/env.js">config/env.js</a> to change server port, jwt secret and other app configurations.</p>
<h2>Run</h2>
<p>Run you application by typing the following command in the terminal:</p>
<pre>node app.js</pre>
<h2>Test</h2>
<p>Test your application using web browser or Postman tool</p>
<h2>API</h2>
<h5>1. Test api to check server is running or not</h5>
<pre>
  Method : GET
  API URL : http://localhost:3000/
  Parameters : None
  Request Header : None
  Response Status : 200 OK
  Response Content Type : application/json
  Response Body : { "message": "Express is up!" }
</pre>
<h5>2. Login api to validate user credentials</h5>
<pre>
  Method : POST
  API URL : http://localhost:3000/api/v1/login
  Request Params : None
  Request Body : email, password
  Request Header : Content-Type : application/x-www-form-urlencoded
  Response Status : 200 OK
  Response Content Type : application/json
  Response Body : { "auth": true, "token": "jwt_api_access_token" }
</pre>
<h5>3. Profile api to access user details</h5>
<pre>
  Method : GET<br>
  API URL : http://localhost:3000/api/v1/profile
  Request Params : None
  Request Body : None
  Request Header : Authorization : Bearer jwt_api_access_token
  Response Status : 200 OK
  Response Content Type : application/json
  Response Body : {"success":true,"user":{"id":1,"name":"Full Name","email":"test@test.com","role":1}}
</pre>
