# Purpose

The purpose for this repository is to set up a quick reference on how to build an application utilizing Python with a Flask framework that serves out a React front-end.

I realize there may be an easier way to accomplish this, but this is going to go up as-is for future reference for me. I will update this repo if I choose to do so and if I find a better way to accomplish the same thing. This repo is non-critical, so updates may be infrequent if there are updates.

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
