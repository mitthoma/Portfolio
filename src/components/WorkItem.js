import React from 'react';
import { Grid, Card, Label, Image, Icon, Button} from 'semantic-ui-react';



export default function WorkItem(props) {

  const myTechStackProps = props.tags;
  console.log(myTechStackProps);

  const colors = [
  'red',
  'green',
  'blue',
  'violet',
  'grey',
  'black',
  'yellow'

]

  const items = []

  for (const [index, value] of myTechStackProps.entries()) {
    items.push(<Label className="myTag raisedCard" basic color={colors[index]} key={index}>{value}</Label>)
  }

  return(

    <div className="workSpacing">

      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} width={8}>
            <Card className="myTestCard raisedCard">
              <Card.Content>
                <Card.Header>{props.header}</Card.Header>
                <Card.Meta>{props.date}</Card.Meta>
                <Card.Description>
                <p className="published">{props.published}</p>

                </Card.Description>
                <Card.Description>
                  {props.description}
                </Card.Description>


              </Card.Content>
              <Card.Content extra>
              <div className="tagGroup">
                {items}
              </div>




                <a>
                  {props.writeup}
                </a>
                <a>
                  {props.github}
                </a>
                </Card.Content>


            </Card>

          </Grid.Column>
        </Grid.Row>



      </Grid>




    </div>



  )



}
