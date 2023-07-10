provider "aws" {
  region = "us-west-2"  # Replace with your desired region
}

resource "aws_ec2_availability_zone_group" "ec2_instance" {

  name = "example-instance"
  instance_type = "t2.micro"
  ami = "ami-0c94855ba95c71c99" 
  key_name = "my-key-pair"  
  vpc_security_group_ids = ["sg-0123456789abcdef0"]  
  subnet_id = "subnet-0123456789abcdef0" 
}