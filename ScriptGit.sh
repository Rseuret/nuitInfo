#!/bin/bash

if test $# -eq 3 
then
cp -rf  $1 $2
git add */*
git add *.*
git commit -m "$3"
echo script fini plus qu a push
else
echo Utilisation :[arg1]chemin dossier à copier [arg2] chemin dossier recepteur de la cope [arg3] message pour le depot git
fi
