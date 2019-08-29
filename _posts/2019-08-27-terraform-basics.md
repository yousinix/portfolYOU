---
layout: post
title: Terraform Quick Start
description: How to start terraforming your environment
bigimg: img/terraforming.jpeg
tags: [terraform, cloud]
---
## Overview
Terraform is automation tool for the cloud infrastructure that:
- Uses Infrastructure as a Code approach ([IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code)) 
- Makes sure that environment is compliant with configuration
- Can be version controled with git, svn or whatever you like (it's code)
- It's designed for infrastructure provisioning, unlike tools like Ansible, Puppet, Salt and Cheef that mainly do software installation and configuration
- Suppports wide range of cloud providers: AWS, Azure, Digital Ocean and more

## Installation on Linux 
Download terraform:
```shell
$ wget https://releases.hashicorp.com/terraform/0.12.7/terraform_0.12.7_linux_amd64.zip
```

Unzip and move to directory defined in your system's PATH:
```shell
$ unzip terraform_0.12.7_linux_amd64.zip
$ mv terraform /usr/local/bin/
```

## Provisioning EC2 Instance
Create an IAM User with programmatic access in your AWS Account ([see AWS Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)) then save AWS credentials on terraform server:
```shell
$  cat << EOF > ~/.aws/credentials
[default]
aws_access_key_id = AKIAVDHWAQS3CRVFJILA
aws_secret_access_key = QQ+KlCC7mFEme8FGFNZCeHVT1LINrePeCVF26J+Y
EOF
```

Create terraform file **main.tf** with provisioning details:
{% gist e3e4480d184648641dcc161e0de5cb4f terraform-example1-main.tf %}

Initialize configuration:
```shell
$ terraform init
```

Plan deployment:
```shell
$ terraform plan
```

Apply changes:
```shell
$ terraform apply
```

Destroy deployment:
```shell
$ terraform destroy
```
