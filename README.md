# figma-config-archive

The goal of this project is to develop a simple react app for figma's config conference archived content. As the event conference continues to grow, it would be nice to have a centralized place to browse past content.

## [View the app](https://figma-config-archive.netlify.app/)


![Screenshot](https://github.com/bsamm/figma-config-archive/blob/main/Screen%20Shot%202020-12-31%20at%204.17.30%20PM.png)


## Key technology

- [React](https://reactjs.org/) (JSX, Context, and Hooks)
- [Emotion(CSS)](https://emotion.sh/docs/introduction)
- [Sanity](https://www.sanity.io/)
- [Git / Github](https://github.com/)

## Step 1: Research

As I look over the figma sites, I want to get a sense for the design, look, and feel of figma sites. I have the idea that figma config could use a archive page.

- https://www.figma.com/
- https://config.figma.com/speakers/

## Step 2: Design the archive page

I used figma to design a simple page and ensure the vision in my mind makes sense on paper.

- https://www.figma.com/file/RD8hmMuZLObMRWq31m3Icn/figma-config-archive?node-id=0%3A1
- https://www.figma.com/proto/RD8hmMuZLObMRWq31m3Icn/figma-config-archive?node-id=1%3A2&scaling=min-zoom&hide-ui=1

## Step 3: Develop

- Create react app: `npx create-react-app figma-config-archive`
- Run the app using: `yarn start`
- View the app at [http://localhost:3000/](http://localhost:3000/)
- After getting the UI in a decent spot, I need to wire in sanity. To get started, I followed [this blog](https://www.sanity.io/guides/build-your-first-blog-using-react) post from sanity.
  - cd `figmaconfigarchive` then `sanity start` then open http://localhost:3333/ to see the sanity dashboard. figmaconfigarchive is the sanity instance.
  - Run `sanity cors add http://locahost:3000` from the `figmaconfigarchive`. View the addition here: https://manage.sanity.io/projects/9g7tx476/settings/api. Note: `Allow Credentials` needs to be on for this example.
  - Run `sanity deploy` to deploy and `sanity undeploy` to undeploy.
  - `npm install @sanity/block-content-to-react @sanity/image-url` for block WYSIWYG content

## Step 4: Deploy

- `sanity deploy`, then open https://figma-config-archive.sanity.studio/desk in the browser
- Use netlify and gitub to setup simple CD from the `main` branch.
- Add `https://figma-config-archive.netlify.app` to origins in sanity admin API settings.

## References

- https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
- https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
- https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660
- https://stackoverflow.com/questions/50361698/border-style-do-not-work-with-sticky-position-element
- https://emotion.sh/docs/babel-macros
- https://www.sanity.io/guides/build-your-first-blog-using-react
- https://egghead.io/lessons/react-set-up-emotion-theming-within-a-reactjs-application
- https://manage.sanity.io/
- https://www.sanity.io/docs/schema-types
