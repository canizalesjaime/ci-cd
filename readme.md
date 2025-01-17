# Continuous Integration and Continuous Deployment 1/21(12-2pm)
* scheduler project(make psql remote(non-local) and connectr pgadmin) (week, calendar, todo)- converts week to pdf
* react docker: npm create vite@latest my-react-app --template react
* sde 2 has CI
* Plan: Start github action(include dockerfile,git?)


# Steps to run project commands
1. ```pg_ctlcluster 16 main start```
2. ```sudo -u postgres psql```
3. ```ALTER USER postgres PASSWORD 'hello1234';```
```sql
4. CREATE TABLE schedule (
  id SERIAL PRIMARY KEY,
  day VARCHAR(50),
  time VARCHAR(50),
  event TEXT
); 
```
```sql
5. CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  due_date DATE
);
```
6. ```cd scheduler```
7. ```npm install```
8. ```npm run dev```
9. open new terminal
10. ```cd /workspace/scheduler/frontend```
11. ```npm install```
12. ```npm start```
13. open a web browser and go to http://localhost:3000

