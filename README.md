# Collosal
![thumbnail](https://raw.githubusercontent.com/iceboy1406/collosal/main/public/images/screenshots/home.png)

Collosal is a company profile website for a company who serve for Application Development, Design and Maintenance. It's just a fictitious website. UI Design of this website made by Muhamad Nauval Azhar and I implement it to a real website. It has 15 page same as design and the contents of this website are static.
## Technology Used

 - [Next JS](https://nextjs.org/) - A React JS Framework and alternative boilerplate than CRA. I use Typescript btw
 - [Tailwind CSS](https://tailwindcss.com/) - An utility class CSS framework
 - [Swiper JS](https://swiperjs.com/) - Library for carousel that easy to custom
 - [React Icon](https://github.com/react-icons/react-icons) - A library that include so many popular icons with SVG based
 - [AOS](https://github.com/michalsnik/aos) - A library to help control animation when scroll

## Demo
You can see the demo on this link below
https://collosal.vercel.app

## A little story about performance optimization
Although this website just for fun, I keep trying to optimize performance of this website. 

 

 - Compress Image as much as possible
	I using [squoosh](https://squoosh.app/) to compress non vector (svg) images to webp format. All images are less than 100kb and most of them even less than 50kb.
	
 - Using lazy loading for image
 Instead use eager for loading image, I use lazy loading. With lazy loading image just load when it needed to load instead preload when first render a page. You can learn more about it on [here](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
 - Using Google Fonts API instead import font from local
 
 With those simple way I can optimize performance a quite drastic.
 While load in desktop it just need 0.8s load load![desktop performance](https://github.com/iceboy1406/collosal/blob/main/public/images/screenshots/desktop-performance.png?raw=true)

But in mobile it need much longer, it need 2.6s-3s to load. Yeah thats not fastest performance but i think its still acceptable for user.
![enter image description here](https://github.com/iceboy1406/collosal/blob/main/public/images/screenshots/mobile-performance.png?raw=true)
 
 
## Author
This website coded by [Eko Susilo](https://github.com/iceboy1406)
And design by [Muhamad Nauval Azhar](https://nauv.al/)
## Figma Link
If you also want to slicing this website from UI Design you can visit [here](https://www.figma.com/community/file/1061303456713302684)