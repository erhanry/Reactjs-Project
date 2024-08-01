#!/bin/sh

for directory in *; do
    if [ -d "${directory}" ] ; then
        for data_file in $directory/*; do
            DB=$(basename $data_file |cut -f 1 -d ".");
            COL=$(basename $data_file |cut -f 2 -d ".");
            mongoimport --drop --jsonArray --db "$DB" --collection "$COL" --file $data_file
        done
    fi
done
