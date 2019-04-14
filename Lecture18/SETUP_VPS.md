# Setting up your VPS

## Login to your VPS

```shell

ssh root@<your ip addr>

```

## Create a New User

```shell

# creates a new user
adduser somenewuser

# adds the user to the sudo group
usermod -aG sudo somenewuser
```

## Install PM2

```shell
sudo npm install -g pm2
```
