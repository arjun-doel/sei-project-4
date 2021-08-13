# General Assembly Project 4: uselocal

### Deployment
https://uselocal.herokuapp.com/


### *timeframe*

- 10 Days

## Goal

A solo project to design a full-stack React app using Django & PostgreSQL.

## Technologies Used

***Frontend***
- React Js
- SASS
- React-Boostrap
- React-Router-Bootstrap 
- React Mapbox GL
- React-Reveal
- React-Spring
- React-Parralax
- React-Rating
- React-Toastify
- Font-Awesome
- React-Router-Dom
- Cloudinary API
- Axios

***Backend***

- Django
- Django Rest_Framework
- Geopy
- PostgreSQL

## uselocal

**uselocal** is a full-stack application using React on the frontend & Django on the backend. A use can login and view and add their favourites locations to a map, similar to Google maps, with Air-Bnb styling in mind.

<img style="float: left;" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1628071053/Screenshot_2021-08-04_at_10.52.55_jycsin.png"> <br />
&nbsp;
## Planning
Planning out the MVP was key to making sure the app functions well at the end of the project. I decided to sketch out the user-flow/experience using Miro.<br />
&nbsp;
<img style="float: left;" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1628073480/Screenshot_2021-08-04_at_11.37.37_muk8vu.png"><br />
&nbsp;

Once the Miro sketch was created. I was able to easily breakdown each section into a task, which I documented using Asana. Asana helped manage each component of the application.

<img style="float: left;" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1628073704/Screenshot_2021-08-04_at_11.41.36_dpahwe.png"><br />
&nbsp;

### Wireframe
I used Figma to create a detailed wireframe.<br />

<img style="float: left;" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1628073902/Screenshot_2021-08-04_at_11.44.50_vth7rt.png"><br />
&nbsp;

## Process
Following the plan, I worked on the backend first then move to the frontend, with occasionally adjusting elements in the backend. Before coding a task, it was important for me to break this down even further. For example, when working on the registration form, I would psuedo code smaller steps to complete the registration form *e.g. collect all data from form, then make a post request.*

### Backend

Three models were created
- Locations: to store all location info

``` 
    price_tier = (
        (1, 'Inexpensive'),
        (2, 'Moderately Expensive'),
        (3, 'Expensive'),
        (4, 'Very Expensive')
    )
    
    name = models.CharField(max_length=50, default=None)
    image1 = models.CharField(max_length=500, blank=True)
    image2 = models.CharField(max_length=500, blank=True)
    image3 = models.CharField(max_length=500, blank=True)
    description = models.TextField(max_length=200, default=None)
    price_rage = models.IntegerField(choices=price_tier, default=2)
    location_type = models.CharField(max_length=50, default=None)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100, default=None, blank=True)
    postal_code = models.CharField(max_length=100, default=None)
    country = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=25, decimal_places=10, default=0, blank=True)
    longitude = models.DecimalField(max_digits=25, decimal_places=10, default=0, blank=True)
    post_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="locations",
        on_delete = models.CASCADE,
    )
```

I also included a reference relationship with the owner & serialized a one too many relationship with the comments, which will be explained further below.


- Comments:

The comments models is a one too many relationship with the locations, I also added a reference to the owner. This allows me to display owner details in the frontend.
```
   Rating_CHOICES = (
    (1, 'Poor'),
    (2, 'Average'),
    (3, 'Good'),
    (4, 'Very Good'),
    (5, 'Excellent')
)
    
    text = models.TextField(max_length=300)
    rating = models.IntegerField(choices=Rating_CHOICES, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.ForeignKey(
        "locations.Location",
        related_name="comments",
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="comments",
        on_delete = models.CASCADE
    )
```

- User:

```
 email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image = models.CharField(max_length=300)
```

All models are serialized to link all relationships together, then converted to JSON.

The next step was to create the views which allows a user to make a request to the backend from the frontend. One of the major additions to the backend was the ability to convert the user address from a post request to longitude and latitude before it hits the db.

I used a piece of middleware called Geopy to make a post request to Geocoder API `Nomatim` to bring back the long and lat.

```
location_to_before = request.data
        address_compiled = location_to_before["address"] + " " + location_to_before["postal_code"] + " " + location_to_before["country"]
        address_replace = address_compiled.replace(",", "")
```

Finally I used the `Django Rest_Framework` and setup all the urls requests.<br />
&nbsp;


### Frontend

The frontend was all about making the app an easy to use & great user experince. I made use of alot of animations with `React-Reveal`, `React-Spring` to make the pages feel dynamic.

Each time a user made a post request, an alert would appear using `React-Toastify`. Like the animations, I wanted to make the app interactive.

```
try {
      await axios.post('/api/auth/register/', formData)
      console.log(formData)
      history.push('/login')
      toast.success('Registration Success')
```

Another element which took time to implement, was the favourites feature. I made use of localstorage to store the id's of each location in JSON. When the user opens the favourites window, a get request is made to the api, which I then use an array method to compare the id's in local storage to the data fetched from the backend and save the objects that are related to the id's in local storage.

```
 useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/maps/')
        console.log('data', data)
        const comparison = data.filter(ite => getItem().includes(parseFloat(ite.id)))
        setLocationsData(comparison)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
```
<br />

## 🎉 wins & losses 😒

My biggest win was also my biggest loss. I spent a while trying to work out the besy way to convert an address posted by a user to longitude and latitude and save in the backend. I started with planning and testing certain aspects of the backend post request func, to see where was best to add this feature. Through my testing I was able to grab the data before it gets sent to the database - this was where I was going to add in the feature.

I then researched the best and most cost effective way to collect the longitude and latitude. I came across many various geocoders. However this process took a while, reading various documentation and trying some of geocoders. But no luck, until I came across geopy, which managed to work well and the documentation was easy enough to follow. I was losing hope whilst working on this feature, it took hours to get it to work. I perserved though it, taking breaks and going through each step one at a time, printing to the console as I go and making requests via Insomnia. 

<img style="float: left;" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1628848596/Screenshot_2021-08-13_at_10.56.19_b8fajz.png"><br />
&nbsp;


It felt so rewarding when I got it to work and I did not regret the many hours I spent adjusting the code.
<br />
&nbsp;

## key learnings
- I've used many new technologies in this project such as **React-Reveal** & **Geopy**. So the ability to read various documentation is a big key takeaway.

- Project planning and psuedo-coding are a must to get a running application completed during any given time frame.

## future improvements
- There are still a few bugs on the front-end, such as posting locations and loggin in. I need to add more error handling for the user and implement a better UI for posting locations.

- I'd also like to add in the ability for a user to pin a location directly on the map.
































