import { Grid, Segment } from "semantic-ui-react"

interface StatusbarProps{
    title: string;
}

const StatusBar:React.FC<StatusbarProps> = ({title, children}) => {
    return  (
        <Grid column={2} className='status-bar'>
            <Grid.Column>
                <Segment basic>
                    {title}
                </Segment>
            </Grid.Column>
            <Grid.Column textAlign='right'>
                <Segment basic>
                    {children}
                </Segment>
            </Grid.Column>
        </Grid>
    );

}

export default StatusBar