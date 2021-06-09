import React from 'react';

import {Grid,
  Button,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Container,
  Sticky,
  Card } from 'semantic-ui-react';
  import '../App.css';
  import WorkItem from './WorkItem';
  import resume from '../resume.pdf';



export default function ExpSection() {





    return(


      <Grid container >


        <Grid.Row centered columns={2}>
          <Grid.Column className="sectionHeaderColumn" computer={16} mobile={16} width={16}>

          <h1 className="sectionHeader">WORK</h1>
          <br />
          <form method="get" action={resume}>
            <Button className="resumeButton raisedCard">View/Download Resume</Button>
          <a href="https://mitchellthecoder.medium.com/"><Button className="resumeButton raisedCard">See My Blog</Button></a>
          </form>


          </Grid.Column>

          <Grid.Column computer={16} mobile={16} width={8}>


              <WorkItem

              header={'Blockchain Kickstarter Clone'}
              date={'April 2021'}
              description={
                "Developed smart contracts that allowed for a blockchain crowdfunding platform where contributors to various kickstarter campaigns could vote on campaign fund distributions to vendors. Created a Front-End Website that successfully allowed the creation of blockchain campaigns as well as options to contribute and become approvers to campaigns using React framework and Next.js, with contract testing using Trufﬂe suite. Incorporated Semantic UI with REACT css framework to structure the app as well as make it mobile responsive."
              }
              tags = {['Solidity Smart Contracts', 'ReactJS', 'Semantic UI', 'Web3', 'Next', 'Truffle']}
              className="workItemSpacing"

              github = {<a href="https://github.com/mitthoma/CHAINFUND"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}
               />

              <WorkItem
                header={'blac_box: Decentralized File Storage'}
                date={'March 2021'}
                description={
                  "Decentralized file storage system application that runs on the Ethereum blockchain. Built with a React front-end, a user can upload files to this dApp and they are stored on the Interplanetary File System (IPFS). Past stored items can be retrieved from the platform as well."
                }
                tags = {['Solidity Smart Contracts', 'ReactJS', 'IPFS', 'Bootstrap', 'ChaiJS', 'Web3', 'Truffle']}
                writeup = {<a href="https://mitchellthecoder.medium.com/benefits-of-decentralized-cloud-storage-3d6bd3cda3bd"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Write Up</Button></a>}
                github = {<a href="https://github.com/mitthoma/blac_box"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}

              />

              <WorkItem
                header={'Lymbas Cryptocurrency & Full-Stack Blockchain'}
                date={'January 2020'}
                description={
                  "Created a blockchain clone from scratch in Javascript with a REACT frontend, tested with Jest testing framework. The application started with a Genesis block and a starting balance of. Lymbas coin and allowed transactions between addresses to take place. Can you catch the Lord of the Rings reference?"
                }
                tags = {['ReactJS', 'NodeJS', 'Redis Pub/Sub', 'Jest', 'ExpressJS', 'Bootstrap']}
                github = {<a href="https://github.com/mitthoma/lymbas_koin_cryptocurrency"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}

               />
               <WorkItem
                 header={'COVID-19 Neural Network Classifier'}
                 date={'April 2020'}
                 published={'Published in Becoming Human: The Artificial Intelligence Magazine with the story receiving over 2.4 thousand views.'}
                 description={
                   "Built a convolutional neural network in the early days of COVID-19 lockdown which classiﬁed X-ray images of lungs to contain COVID with an accuracy of 75-92% with 50 previously classiﬁed x-ray samples. Built with Python."
                 }
                 tags = {['Python', 'Sci-Kit Learn', 'Keras', 'Pandas', 'GoogleNet']}
                 writeup = {<a href="https://becominghuman.ai/deep-learning-with-covid-19-xray-convoluted-neural-network-a57a521855c9"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Write Up</Button></a>}
                 github = {<a href="https://github.com/mitthoma/DEEP-LEARNING-WITH-COVID-19-XRAY-CONVOLUTED-NEURAL-NETWORK"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}
                />
                <WorkItem
                  header={'Multilayer Perceptron From Scratch'}
                  date={'March 2019'}

                  description={
                    "Built a classifier Multilayer Perceptron Neural Network that classified flower species. This Multilayer Perceptron Neural Network performs at usually high levels as the majority of the time we get results of over 92%. That means that 92% of the time, this neural network is identifying the type of flower based on just being fed various characteristics of the flower. "
                  }
                  tags = {['Python', 'Sci-Kit Learn', 'NumPy']}
                  writeup = {<a href="https://mitchellthecoder.medium.com/neural-network-from-scratch-bf905edbf2a2"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Write Up</Button></a>}
                  github = {<a href="https://github.com/mitthoma/MLP-from-scratch/blob/master/MLP.ipynb"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}
                 />
                 <WorkItem
                   header={'Support Vector Machine vs. MLP Comparison'}
                   published={'Published in Becoming Human: The Artificial Intelligence Magazine with the story receiving over 2.1 thousand views.'}
                   description={
                     "Built a multilayer perceptron using Sci-Kit Learn, and then build a Support Vector Machine with the same data and compare the two performances. This was a project that was assigned within my Principles of Machine Learning course."
                   }
                   tags = {['Python', 'NumPy', 'Sci-Kit Learn', 'Pandas', 'Matplotlib']}
                   writeup = {<a href="https://becominghuman.ai/comparing-svm-and-mlp-machine-learning-models-348d08efea6b"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Write Up</Button></a>}
                   github = {<a href="https://github.com/mitthoma/Comparing-SVM-and-MLP"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}

                  />
                  <WorkItem
                    header={'Blockchain Election Decentralized Voting App'}

                    description={
                      "Simple smart contract that holds elections and allows users to vote between candidates on the Ethereum network. "
                    }
                    tags = {['Solidity Smart Contracts', 'NodeJS', 'Truffle', 'HTML/CSS', 'Lite Server']}

                    github = {<a href="https://github.com/mitthoma/electiondapp"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}

                   />
                  <WorkItem
                    header={'BLACSAND website'}
                    date={'March 2020'}
                    description={
                      "Built the official website for my company. This was built using stunning design practices and highlights the creativity and nature of the artists within the company. Welcome to the BLACSAND universe."
                    }
                    tags = {['HTML/CSS', 'Bootstrap', 'Javascript', 'AnimeJS']}
                    github = {<a href="https://blacsand.io"><Button style={{marginTop: '2%'}} className="workButton raisedCard">View Website</Button></a>}

                   />
                   <WorkItem
                     header={'My Portfolio Web App (this website)'}
                     date={'June 2021'}
                     description={
                       "Built a React application as my portfolio website to create an infrastructure that can be built upon in the future. Used React Framework for a lightning fast Single Page Application (SPA) and a modern use of components to make content easily manageable in the future."
                     }
                     tags = {['ReactJS', 'HTML/CSS', 'NodeJS', 'Semantic UI']}

                    />
                    <WorkItem
                      header={'Full-Stack YelpCamp Camping Review Community'}
                      date={'January 2019'}
                      description={
                        "Full Stack camping review site. This site allows new members to register accounts through authentication where they can upload their favorite campgrounds, with media, as well as leave comments on other users' posts. First project using MEAN Stack. "
                      }
                      tags = {['NodeJS', 'MongoDB', 'ExpressJS', 'Angular', 'HTML/CSS', 'FlexBox framework']}

                     />
                    <WorkItem
                      header={'SMS Spam Machine Learning Classifier'}
                      date={'April 2019'}
                      description={
                        "A group project in my Artificial Intelligence class where my group of three classified SMS text messages that came in as either spam or not spam based on researched attributes. I was in charge of implementing the Support Vector Machine model, which won as the most powerful model for that problem. "
                      }
                      tags = {['Python', 'Sci-Kit Learn', 'Pandas']}
                      github = {<a href="https://github.com/mitthoma/sms-spam-classifier"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}


                     />
                     <WorkItem
                       header={'Python Word Counter Script'}
                       date={'January 2019'}
                       description={
                         "A simple script that reads in a text file that is fed to it, and outputs the highest frequency words used, their counts, as well as the entire document word count."
                       }
                       tags = {['Python']}
                       github = {<a href="https://github.com/mitthoma/WordCounter"><Button style={{marginTop: '2%'}} className="workButton raisedCard">Github Repo</Button></a>}

                      />

                      <WorkItem
                        header={'Python Random Tweet Script'}
                        description={
                          "A goofy python script that connects with the Twitter API. When the script is run, the program picks a random follower of yours on your twitter account and tweets a custom message tagging them. Don't @ me broh!"
                        }
                        tags = {['Python', 'Twitter API']}

                       />


          </Grid.Column>


        </Grid.Row>
      </Grid>



    );


}
