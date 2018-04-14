#!/bin/bash   
updir=/Users/lizhiyong/Downloads/Ex_Files_Nodejs_EssT/Exercise Files/Ch06/06_03    #要上传的文件夹  
todir=/          #目标文件夹     
ip=10.0.1.16      #服务器  
user=jason          #ftp用户名  
password=aaa   #ftp密码  
sss=`find $updir -type d -printf $todir/'%P\n'| awk '{if ($0 == "")next;print "mkdir " $0}'`   

printf $sss
#sss=`find $updir -type d -printf $todir/'%P\n'| awk '{if ($0 == "")next;print "mkdir " $0}'`   
#aaa=`find $updir -type f -printf 'put %p %P \n'`   
# ftp -nv $ip <<EOF   
# user $user $password  
# type binary   
# prompt   
# $sss   
# cd $todir   
# $aaa   
# quit   
# EOF  

