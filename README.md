# goodlifeondemand
Website for [Goodlife on Demand Productions](http://goodlifeondemandproductions.com/)

Staging site hosted by Zeit: [goodlifeondemand.drewhaas.now.sh](https://goodlifeondemand.drewhaas.now.sh/)

This is using the Vue JS Framework.
Documentation on that can be found here: [Vue](https://vuejs.org/)

This version is using Prismic as a Headless CMS: [Prismic Dashboard](https://goodlifeondemandproductions.prismic.io/documents/working/)

## Project setup
### Clone the project locally
```
git clone git@github.com:drew-haas/goodlifeondemand.git
```
```
cd goodlifeondemand
```
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Project Deploying
### Compiles and minifies for production
```
npm run build
```

<!-- After build has run, upload everything in the dist folder to the public_html folder on your server. -->
When a Pull Request is merged to Master. Zeit will automatically deploy the latest code. This is all set up through Zeit and GoDaddy DNS.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Other applications being used on this project
Vimeo
Zeit
Prismic

## Creating and Editing Content in Prismic
You should almost always stay on the content page.

![Prismic Content Page](/documentation/images/content-page.png)

### Creating a Video
1. Click 'Create New' in the top Right of the content page and select 'Video'
2. Fill out a Video Title ("Landman Wedding"), Video Id - this is the id associated with the vimeo video. The ID can be found at the end of the vimeo url:
![Vimeo ID](/documentation/images/vimeo-id.png)
3. Once done with the fields click Save THEN Publish in the top right. Then click Publish again with 'Publish it Now' selected.
![Publish](/documentation/images/publish.png)

### Add Video to a Page
Now you need to add your video to a page.

1. Back on the Content page click on the Work Page.
2. Select the "Add a new element in Videos" button. A new video Line will appear right above that button.
![Add a new Element in Videos](/documentation/images/add-new-video.png)
3. Click on "Select a Link" and choose the video you wish to add from the list of videos that comes up.
4. When you're done click Save THEN Publish in the top right.

Your new video should appear on the page after a refresh.
