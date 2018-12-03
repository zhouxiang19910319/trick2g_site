# Trick2g's entertainment center(twitch + youtube) V1.0

![trkChamp](https://res.cloudinary.com/zzrot/image/upload/v1543383281/trick2g_site/trkChamp_big.png)

## Version 1 Screenshot
![version_1](https://res.cloudinary.com/zzrot/image/upload/v1543809147/trick2g_site/v1_screenshot.jpg)

## Aim
Just to make everything works.Viewers can use this site to see trick's youtube playlist as well as twitch.tv stream.

## Version 1.0
Follow tutorials and try to make the site work. (new version will be coming after I've made this one work)

## User Stories
1. User is able to view trick's live stream at twitch.tv, and use full screen mode on it, at the same time see twitch chat at the right hand side.
2. User is able to see trick's latest youtube video on the bottom left hand side. At the bottom right, there will be a playlist that is included all the youtube vidoes on trick's youtube channel.

References:
* https://www.youtube.com/user/Trick0850
* https://www.twitch.tv/trick2g

##Progress

* Navbar + footer ✅
* Add favicon to this site ✅
* Add loading image when site loads??
* Youtube section : (https://www.youtube.com/watch?v=9sWEecNUW-o)
  * General UI 
    * Still need to handle the 2 column design ✅
  * Hook up the youtube API ✅
  * Make the right site list a stand alone scrollable one ✅
  * Remember to restrict the API call
* 

## Misc

* Youtube playlist IP : `https://www.youtube.com/watch?v=F3xedTQh-tQ&list=PLvYbWbiZnQ0cl_ZrEEtmwll3wBKkOeS-T`
* Playlist ID `PLvYbWbiZnQ0cl_ZrEEtmwll3wBKkOeS-T`

* 

##Known Issue

1. ~~Footer cannot be displayed because youtube section was set to `display:absolute` workaround => **disable footer**~~
2. Youtube Section cannot be displayed fully because of `display:absolute` workaround => **used css grid instead**