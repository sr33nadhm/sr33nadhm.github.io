import { RotateRight } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import projects from "../../assets/projects.json";

function Projects() {
    return (
        <section className="section-col">
            <div className="projects">
                <Typography variant="h6" component="h6" sx={{
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: "#817a7a",
                    marginBottom: '15px'
                }}>
                    Projects Showcase
                </Typography>
                {
                    projects.map((item, index) => {
                        return (
                            <Card sx={{ maxWidth: '100%', marginBottom: '20px' }} key={index}>
                                <CardHeader className="project-card-header"
                                    subheader={item.title}
                                />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing className='d-flex justify-content-space-between'>
                                    {
                                        item.done === true ?
                                            <div className='btns-row'>
                                                <a alt={item.title} href={item.link} style={{ textDecoration: "none" }}>
                                                    <Button size="small" variant='contained'>Demo</Button>
                                                </a>
                                                <a href={item.code} style={{ color: 'inherit', textDecoration: "none", marginLeft: 15 }}>
                                                    <Button size="small" variant="outlined" endIcon={
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                                        </svg>}>
                                                        Code
                                                    </Button>
                                                </a>
                                            </div>
                                            :
                                            <div className='btns-row'>
                                                <Button size="small" variant="outlined" endIcon={<RotateRight />}>
                                                    In Progress
                                                </Button>
                                            </div>
                                    }

                                </CardActions>
                            </Card>
                        );
                    })
                }
                <Card sx={{ maxWidth: '100%', marginBottom: '20px', boxShadow: "0px 0px 24px -16px rgba(0,0,0,0.66);" }}>
                    <CardContent style={{ padding: "16px 16px 0 16px" }}>
                        <Typography variant="body2" color="text.secondary">
                            See my other projects in git repositories.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <a href="https://github.com/sr33nadhm" style={{ color: 'inherit', textDecoration: "none" }}>
                            <Button size="small" variant="outlined" endIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>}>
                                Git
                            </Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
        </section>
    )
}

export default Projects