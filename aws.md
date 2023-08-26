# AWS EC2 Project

1. create lunch template:
![Alt text](image.png)

![Alt text](image-1.png)
2. Choose software configuration 

![Alt text](image-2.png)
3. Choose free tier eligible type for instance and key pair 
*note:  When your instance boots for the first time, the public key that you specified at launch is placed on your Linux instance in an entry within ~/.ssh/authorized_keys
![Alt text](image-4.png)

4. Adding security group

![Alt text](image-3.png)
5. Scroll down to _Advanced details_ and fill up user data . 
![Alt text](image-5.png)
 Then click create template 
![Alt text](image-6.png)
![Alt text](image-7.png)

6. launch instances from template(2 instances)
![Alt text](image-8.png)
![Alt text](image-9.png)
![Alt text](image-10.png)
![Alt text](image-11.png)

7. create Target Group 
![Alt text](image-12.png)

8. register targets which are the 2 instances being launched from template 

![Alt text](image-13.png)

9. Create application load balancer 
![Alt text](image-14.png)
![Alt text](image-15.png)

10. Select at least two Availability Zones and one subnet per zone. 
![Alt text](image-16.png)
![Alt text](image-17.png)

11. Select a load balancer security group 
![Alt text](image-18.png)

12. set listeners and routing 
![Alt text](image-19.png)

13. create and view load balancer 
![Alt text](image-20.png)
![Alt text](image-21.png)
14. Create an auto scaling group and select launch template 
![Alt text](image-22.png)

15. choose all availability zones 
![Alt text](image-23.png)
16. Attaching the Load-Balancer with the Auto Scaling Group :
![Alt text](image-24.png)

17. Turn on Elastic Load Balancing health checks
![Alt text](image-25.png)

18. Specify the size of the Auto Scaling group by changing the desired capacity.

![Alt text](image-26.png)

19. set the scaling policy to use the Average CPU utilization metric of value 60.
![Alt text](image-27.png)
20. Auto scaling group is created 
![Alt text](image-28.png)

21. check out if the instances are running 
![Alt text](image-29.png)

22. go to target group and see if instances healthy or not (this may take a while ..)
![Alt text](image-30.png)

23. if are healthy..you can navigate by open the address
