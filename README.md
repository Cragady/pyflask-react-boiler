# Purpose

The purpose for this repository is to set up a quick reference on how to build an application utilizing Python with a Flask framework that serves out a React front-end.

I realize there may be an easier way to accomplish this, but this is going to go up as-is for future reference for me. I will update this repo if I choose to do so and if I find a better way to accomplish the same thing. This repo is non-critical, so updates may be infrequent if there are updates.

This reference is assuming that the developer is using a linux distro. 

# To Start

You need to set up your virtual environment then install the neccessary dependencies for this app to work.

Open a terminal and in the project's root directory, run:

`flask run`

Open a new terminal and in the project's `react-client` directory, run:

`yarn start`

# Note:

It is crucial to remember to activate your virtual environment for python before installing any dependencies. If your environment is already set up, then activate it like this:

`source env/bin/activate`

I typically like to keep the virtual environments in the root of the project folder and name it `env`. Be sure to add the `env/` directory to your `.gitignore` if it isn't already in there.

`echo env/ >> .gitignore`

If you like to have your `.gitignore` file a bit more organized, then just use your favorite text editor to add `env/` into `.gitignore` where you would like it.

If you do not have a virtual environment set up, then you'll need to set up the virtual env before you can activate or install dependencies. 

In your project's root directory:

`python -m venv env`

It is important to remember to never install python packages globally. It will break things if you are on a linux distro. Use your user's home path for installing packages if you need global access. Using the user's home path will keep the distro's python environment clean.

# Installing Dependencies

After you have your virtual environment set up, run this command:

`python -m pip install -r requirements.txt`

# Stack Used

* Python v 3.8.5
* Flask
* React

# Note:

This set of instructions had to do with another application, but some of the following concepts should apply here as well. These aren't very well written as I had expected noone else to read this but me. This is a quick and dirty set of notes until I can expand on these notes.

# Startup For App

* `redis-server`
  * Needs a separate terminal or bg-process

* `. .env`
  * This applies to any needed terminals that uses a python command

* `python worker.py`
  * Needs a separate terminal or bg-process, env, and in project root

* `python manage.py runserver`
  * Needs a separate terminal or bg-process, env, and in project root

# Some Python Notes

This repository is a very basic setup for python web app utilizing Flask.

## Tips

* create env (can be anywhere, this is assuming root directory of project.
  * python -m venv env
    * python -m venv <env name>

* Activate virtual environment
  * source env/bin/activate
    *source <path to env>/bin/activate

* Anything pip related:
  * You may want to initiate all pip commands utilizing the pip that comes with the python version. E.g. `python -m pip <command>`

* update pip in virtualenv
  * pip install --upgrade pip

* Install from requirements.txt
  * pip install -r requirements.txt
    * pip install -r <name of file>

* Update package dependencies tracker file
  * pip freeze > requirements.txt
    * pip freeze > <name of file>

* Run server
  * python app.py

  OR

  * gunicorn app:app
