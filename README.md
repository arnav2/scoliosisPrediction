# scoliosisPrediction
This repository would be a single page application in react that would predict scoliosis data based on video upload api and point cloud data

The mock DB is hosted at (run in a separate terminal): 

MOCK DB COMMAND: 

### npx json-server --watch db.json --port 5000

In second terminal you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test` - No tests were added

## TODO: 
* Tests were not added unfortunately due to lack of time. 
* Some error states were considered but not added.
* Some errors were not added due to lack of time such as if API fails. I added the state for it but I never conditionally rendered it. I could probably do it if it was necessary but seemed like not a big deal for such a small project with a mock DB. I do take care if the DB connection is not there as it gives an empty list in that scenario.
* Modal could have been improved such as the x button at the top. Mouse hover features, animation features etc. but I invested my time in making a pretty website
* The task was to create a simple 3D data model but creating a meshgrid of a human might have been an interesting project I might search for next time.
* I wanted to re-render the list after an x amount of time. In reality, this would be a paginated list from the backend and we would request that every 30 minutes ?? probably to make sure that the patient data is in-sync. 

## KEY CHALLENGES: 

* 3D Model - I did spend a lot of time trying different animations and I got some results but then some of them showed 3D images without animations. I did learn animation now but however, but I don't think I had enough time to produce the previous mesh results so settled with a basic result.
* Design Layout - I considered several layouts before I thought about how it should look for a doctor. As a doctor, I might want to see more info on the patient but I didn't really plan that much. This gave a brief overview of the expectation
* Mobile friendly - Still not happy with the table and the recent update does break the table row line a bit when it goes down to the mobile screen. I do not have the time to debug it anymore but it could be interesting.
* Choosing modal - Initially I was choosing it to render on the page which seemed like something most doctors wouldn't like because well they might prefer to see it in full screen the changes. And then there were a lot of design considerations, such as whether should I render to the left of the text list or bottom. The bottom seemed like a bad UX so decided to render as a modal. Another consideration was to animate the table to go down and show the 3D render on top of the page but a simple modal seemed the most efficient way. 
