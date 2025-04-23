# modern react tutorial

youtube link: [from 0 to production](https://www.youtube.com/watch?v=d5x0JCZbAJs)

## notes

- to create a new project: ``npm create t3-app@latest``
- tRCP not a necessary dependency for full stack application
- drizzle is a significantly better orm than prisma. it features better performance, better integration with typescript, a signficantly more quality of life experience
- git add -p lets you interactively view the changes you've made, and lets you selectively commit certain chunks of your file, and/or certain files whilst skipping others
- this project requires setting the DATABASE_URL environment variable. this isn't commited in .env files since it contains sensitive information, and instead should be added as part of the deployment service. you can add this in vercel from settings -> environment variables, which allows the app to use them in a private manner, without commiting them to git
- vercel automatically assumes that the root directory contains your npm package.json and package-lock.json. this conflicted with my setup of using the t3gallery subfolder. in order to fix it i had to go into my project settings and re-create it with a different root specified, pointing to ./t3gallery. this allowed it to successfully build whilst allowing me to retain my custom organization.
- after deploying to vercel, we don't have to manually redeploy. all changes will instantly update and re-deploy as soon as we push onto the repository
- hosting files from public directory have potential issues because of bandwidth usage
  - use a service that does not charge for bandwidth like ``uploadthing.com``
- topnav fits in layout.tsx because we want it in other pages
  - layout applies consecutively
  - first layout applies on the first layer and then next one gets uploaded next
- never share any secret codes because that can be a liability since they can get into the database
- good to have a different dev and production environment so that when changes are made, it does not break production
- should check on page if user should be able to load data
- when folder with underscore is in app, it tells the app not to include in routing
- authentication:
  - ``<SignedOut>`` will render what users should see when signed out
  - ``<SignedIn>``will render what users should see when signed in
- auth call in uploadthing is now async, so i had to add await auth()
- the uploadthing npm package had a bewildering bug with a known and defined value being "undefined" when executing in the code. the solution ended up being downgrading a bunch of packages to the versions matching in the video, and alongside that, changing some small things to work with the older versions.
- using next/image allows the server to optimize the image by filesize, thereby reducing the amount of data that needs to be sent to the user without any noticable issues when zoomed out

## todo

- [X] make it deploy (vercel)
- [X] scaffold basic ui with mock data
- [X] tidy up build process
- [X] actually set up a database (vercel postgres)
- [X] attach database to ui
- [X] add authentication (w/ clerk)
- [X] add image upload
- [X] "taint" (server-only)
- [X] use next/image component
- [ ] error management (w/ sentry)
- [ ] routing/image page (parallel route)
- [ ] delete button (w/ server actions)
- [ ] analytics (posthog)
- [ ] ratelimiting (upstash)
