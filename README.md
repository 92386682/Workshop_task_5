#WORKSHOP NUMBER 5
•	Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.
•	Experiment with different ways to present the data, e.g. using text, images, shapes, or colours.
•	Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.
#Workshop Notes
Skateboard view of building up to complex problems
##Initial plan (written before coding)
The initial plan for this workshop is to visualise my most listened to song of 2024. My initial conception is that music can be captured as a simple series of db measurements, which can then be expressed as a cvs file, with an array reflecting the series of sounds from a single song, then converting this raw data as a visual.
![42](https://github.com/user-attachments/assets/ec6bd4fa-816b-43ab-9031-54fef2eb3952)
![44](https://github.com/user-attachments/assets/2e425a3d-e798-44fe-a823-c86eb6596845)


Beginning with the process of converting audio into text, I made use of audacity paired with a guide by Andrew Brown posted on Quora (link in acknowledgement). Whilst I did succeed at converting the .wav file into a simple txt document, sampling the song in its original quality would require an array of 10,496,000 samples. Which seems like a rather large amount to manually enter into an excel.
After reading into audio sampling, it seemed that whilst third party software has the ability to transcribe full songs, the large sample number is reflected in Hz (generally 48,000 samples per second/48Hz), and that by reducing the quality of this, I could lower the sample rate into a simpler array, and stay under Audacities inbuilt million sample limit. I eventually managed to reduce the array to a relatively lower 2.3 million line sample rate, and then further until 0.42Hz at a transcribable rate of 999,62 inputs sampling 420 times per second. I was able to cross convert this back and forth between .txt and .wav. I also discovered that audacity has in built capability to export to CSV. 



##Process
Moving the CVS into p5, I began by attempting to create a function that went through the CSV sequentially, moving down the list one by one. Uncovered in class, this took longer than expected until eventually I discovered getString via p5 referencing. Working with a setInterval function and variable, I created a test text() to express each value on a simplified 5 line CSV; printing out the outcome.
![47](https://github.com/user-attachments/assets/29f37083-b120-4d8c-af44-19023d184810)

Expanding from this, I built a basic wavelength through 2 lines. As all the Db outcomes were negative, I negated this and amplified the base data by 1.5 for more dynamic results. At this point, the first line() statement began making x movements based off its y coordinates, and I have no explanation for this. But, the code was working; 
![48](https://github.com/user-attachments/assets/ceb07d22-c098-4c6e-ba12-46bdc12982de)

At this point, I moved onto the longer CSV file, and integrated both Db data values. Trying to integrate more of the workshop’s examples. I realised that the lack of dynamism in the line was a framerate issue, as I needed the code to update 420 times per second (based on the highest value I could export the song whilst keeping it under 1,000,000 lines). This was resolved via a framerate() adjustment. 
![51](https://github.com/user-attachments/assets/87aaf287-b2c1-4d30-b617-8b6826844961)

Moving backwards across workshops, I wanted to integrate the CSV variables more deeply into the work, working with the fact that as a whole they were numerical values ranging from -50. to -110. Additionally, I wanted to expand on workshop skills, so I integrate a loop to repeat the lines across the x axis scaling down 0.9
Beginning with 
'
  while (origin < width) {
    line(origin, 0, origin, output);
    line(origin, 0, origin, -output);
    line(origin,0, origin, -output2);
    line(origin, 0, origin, -output2);
    scale(0.9)
    origin += 10;
  }'
In theory, this should have repeated the line across the screen. In practice, it erased the line. Whilst the origin shift was working correctly with the loop commented out, I spent time troubleshooting this unsuccessfully, until I replaced the while() with the same function expressed as a for(), which did work successfully, though it accidentally simulated a 3d effect looking along the wavelength instead of 2d across the screen.
![53](https://github.com/user-attachments/assets/821d3f4f-d24d-4b70-a004-109a29ab16c0)

After this, it was mainly minor tweaks to the code, and some clean ups. Whilst it would be more optimal to express the line() functions as a loop within a loop instead of the manual repetition of the code, this is a thought for further development.
At this point though, I realised I was still using placeholder music data, and went and replaced the original CSV file with one generated from my most listened to of 2024. 

![54](https://github.com/user-attachments/assets/46460104-883c-468e-b03a-841553ae678b)

##Possible development (beyond this task)
Running the csv retrieval as an array, so that instead of all lines moving to the same dB time, it would move across the screen dynamically. Pixel by pixel manipulation working with data values, integration of WEBGL 3-dimensional renders.
##Citations/acknowledgement	
https://www.quora.com/How-do-I-convert-an-audio-file-to-a-csv-file
https://manual.audacityteam.org/man/sample_data_export.html
