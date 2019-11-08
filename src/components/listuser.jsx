import React, { Component } from "react";
import Getpost from '../components/getpost'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const makeStyles = theme => ({
    card: {
        display: 'flex',
    },
    cursor: {
        cursor: 'pointer',
    },
    padding: {
        padding: 20
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    margin: {
        marginTop: '4%'
    }

})
export default withStyles(makeStyles)(class ListUser extends Component {
    constructor(props) {
        super(props);
        this.openPage = this.openPage.bind(this);
        this.iterateImage = this.iterateImage.bind(this);
        this.state = {
            component: false,
            data: []
        }
    }
    componentDidMount() {
        axios.get('https://n161.tech/api/dummyapi/user').then(res => {
            this.setState({ data: res.data.data });
        });
    }
    openPage(e, id) {
        e.preventDefault();
        this.setState({
            component: true,
            id: id
        })

    };
    iterateImage(data) {
        const { classes } = this.props
        return (
            data.map((data, index) => {
                return (
                    <div key={index}>
                        <Grid item xs={12}>
                            <div className={classes.padding}>
                                <Card className={classes.card}>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>

                                            <Typography component="h5" variant="h6">
                                                <span className={classes.cursor} onClick={(e) => this.props.history.push(`/users/${data.id}/posts`)}>
                                                    view my post...
                                                </span>
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                <p>{data.firstName}</p>
                                            </Typography>
                                        </CardContent>
                                        <div className={classes.controls}>

                                        </div>
                                    </div>
                                    <CardMedia
                                        className={classes.cover}
                                        image={data.image}
                                        title="Live from space album cover"
                                    />
                                </Card>

                            </div>
                        </Grid>
                    </div>
                )
            })
        )
    }
    render() {
        const { component, data } = this.state
        const { classes } = this.props
        console.log(data)
        if (!component) {
            return (
                <div>
                    <Grid container direction="column"
                        alignItems="center"
                        justify="center" spacing={1}>
                        <Grid container className={classes.margin} item xs={12} lg={12} spacing={3}>
                            {this.iterateImage(data)}
                        </Grid>
                    </Grid>
                </div >
            )

        } else {
            console.log(this.state.id)
            return <Getpost id={this.state.id} />

        }

    }
}
)
