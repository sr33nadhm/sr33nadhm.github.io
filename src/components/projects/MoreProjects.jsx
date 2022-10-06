import projects from "../../assets/more-projects.json";
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { RotateRight } from '@mui/icons-material';
import Slider from "react-slick";
import { sliderSettings } from '../../assets/slider';

function MoreProjects() {
    return (
        <section className="section-row">
            <div className="faq">
                <Typography variant="h5" component="h5" sx={{
                    fontWeight: 600,
                    textDecoration: 'none',
                }}>
                    More Projects
                </Typography>
                <div className="mt-3 w-100">
                    <Slider {...sliderSettings}>
                        {
                            projects.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Card className="more-projects-card" sx={{ width: '85%', margin: "auto" }}>
                                            <CardHeader
                                                subheader={item.title}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="260"
                                                image={item.image}
                                                alt={item.title}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.desc}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className="px-3 mb-3">
                                                {
                                                    item.done === true ?
                                                        <a alt={item.title} href={item.link} style={{ textDecoration: "none" }}>
                                                            <Button size="small" variant='contained'>View</Button>
                                                        </a>
                                                        :
                                                        <Button size="small" variant="outlined" endIcon={<RotateRight />}>
                                                            In Progress
                                                        </Button>
                                                }
                                            </CardActions>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default MoreProjects