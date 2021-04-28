import { Grid, Segment } from "semantic-ui-react"

interface StatusbarProps{
    title: string;
}

const StatusBar:React.FC<StatusbarProps> = ({title, children}) => {
    return  (
        <Grid column={2}> 
            <Grid.Column class='four wide column right aligned'>
                <Segment basic>
                    {title}
                </Segment>
            </Grid.Column>
            <Grid.Column floated='right'>
                <Segment basic>
                    {children}
                </Segment>
            </Grid.Column>
        </Grid>
    );

}

export default StatusBar