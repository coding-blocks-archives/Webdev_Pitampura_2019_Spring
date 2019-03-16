
## SETUP MYSQL FOR USAGE

### Login

```shell
mysql -u root -p
```

### Create DB and User

```mysql
create database sampledb4;

create user sampleuser4 identified by 'samplepass4';

grant all privileges on sampledb4.* to sampleuser4;
```

Ctrl-D to logout

### Login as new user


```shell
mysql -u sampleuser4 -p
```
