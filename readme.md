<!-- app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2 ',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});


app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('64aecdba8cf573710159e5a1')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}); -->

## Blog Application using Node.js, Express, and MongoDB
This repository contains the code for a blog application built with Node.js, Express, and MongoDB. The application's structure and concepts were referenced from The Net Ninja YouTube channel.

## Overview
The blog application allows users to create, read, update, and delete blog posts. It incorporates Node.js as the runtime environment, Express as the web framework, and MongoDB as the database. The application follows RESTful API principles for handling CRUD operations on blog posts.

## Installation
Clone the repository: git clone <repository-url>
Navigate to the project directory: cd blog-application
Install the dependencies: npm install
## Configure MongoDB connection:
Create a .env file in the project root directory.
Set the MONGODB_URI variable in .env to your MongoDB connection string.
Start the application: npm start
## Usage
Access the application in your web browser: http://localhost:8000
Sign up for a new account or log in if you already have one.
Create, view, edit, or delete blog posts using the provided interface.
Enjoy managing and sharing your blog content!
Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## Credits
This blog application was built with guidance and inspiration from The Net Ninja YouTube channel. The tutorials provided valuable insights into Node.js, Express, and MongoDB integration.

## License
The project is licensed under the MIT License. Feel free to use and modify the code as per the terms of the license.
