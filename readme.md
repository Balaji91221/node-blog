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
