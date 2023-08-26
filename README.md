# AWS EC2 Project

1. create lunch template:
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/53a25ad9-f500-4e8c-9f3d-0b6d88b108de)


![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/8ddfacc9-48d0-4521-9819-b8c8bf778621)
2. Choose software configuration 

![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/c07b1f2b-a732-4b1d-a80d-885cee474d65)
3. Choose free tier eligible type for instance and key pair 
*note:  When your instance boots for the first time, the public key that you specified at launch is placed on your Linux instance in an entry within ~/.ssh/authorized_keys
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/ca3d7c69-cc4e-4177-8743-83d60f6e1b04)

4. Adding security group

![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/33d3fa5b-ea9d-43fc-8a4d-81de77ad6fc2)
5. Scroll down to _Advanced details_ and fill up user data . 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/1fb37885-2ade-4053-9cb7-72f908822627)
 Then click create template 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/f658837a-993a-4d34-aa04-7c1d0b9b6044)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/2ac73655-3f97-4218-891f-7879fdeb16a3)

6. launch instances from template(2 instances)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/c3b36178-5cad-49c8-9abc-c23b92f3f05a)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/ea655702-16e5-4c39-a7ea-84e7f3eb9ebe)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/59565ec3-83e3-48f7-9934-e5d61f71b1a7)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/d5f920ca-e878-4a0c-a2ff-88fcbeeee07b)

7. create Target Group 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/a9209b8d-ff83-4dfb-9285-2778c7f8b3c1)

8. register targets which are the 2 instances being launched from template 

![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/6b74293a-fd5e-4ed4-bdef-05490272b888)

9. Create application load balancer 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/7505a199-c1c5-48f0-b849-154a39c2a67f)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/b3c5db09-2a71-491a-843a-2b00f66a5f0f)

10. Select at least two Availability Zones and one subnet per zone. 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/082e8aeb-e25a-4b44-8b8b-a5cad30c86fb)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/95e4ddee-7cbe-4606-93ba-c68c95a81227)

11. Select a load balancer security group 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/e328266c-22a7-49b9-8cdd-65a2a8c808f1)

12. set listeners and routing 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/2744c817-bc0c-4e8f-b1f6-c39f38706648)

13. create and view load balancer 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/8384f66e-88ed-4fec-b55f-e319eab0a6e7)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/0ff7f143-1999-4a2f-8e2a-24230fb01aec)
14. Create an auto scaling group and select launch template 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/73da77e6-213e-4abc-92d1-4c524f094820)

15. choose all availability zones 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/20a347a7-ba38-461d-9fc6-3f705cf74223)
16. Attaching the Load-Balancer with the Auto Scaling Group :
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/7220cb6c-5236-4ccf-be81-3ac2d182e652)

17. Turn on Elastic Load Balancing health checks
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/0d3bd4e0-1093-4ded-a9ee-546edc92ae48)

18. Specify the size of the Auto Scaling group by changing the desired capacity.

![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/d013df46-bed4-4b39-8a5b-637208f39a5b)

19. set the scaling policy to use the Average CPU utilization metric of value 60.
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/157f1360-c1f4-488b-85e8-eb84e0cb08e0)
20. Auto scaling group is created 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/36522978-6705-4eab-8486-4cee407d1458)

21. check out if the instances are running 
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/df349403-c9bc-4d2e-bf27-ea013f0cd948)

22. go to target group and see if instances healthy or not (this may take a while ..)
![image](https://github.com/M-Alsuleibi/BookApp/assets/73719352/3b9ff33e-61ad-4ddf-8214-d9b887301c15)

23. if are healthy..you can navigate by open the address
