# Logging browser errors with nginx

Repository for the blog post from https://matthias-kainer.de/blog/posts/logging-client-console-errors-with-nginx/

## Run 
* `docker run -p 8080:80 --rm $(docker build -q .)` in a shell
* open `localhost:8080` in the browser

## What's it?

When you click on the buttons, either an unhandled javascript error, or a `console.error` is triggered. Those will be logged on the server, because sometimes it's good to know what's happening to your users.