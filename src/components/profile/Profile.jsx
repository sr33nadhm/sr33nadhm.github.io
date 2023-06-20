import { Avatar, Button, IconButton, Typography } from "@mui/material";
import dp from "../../assets/propfile-pic-min.jpg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { EventAvailable } from '@mui/icons-material';

function Profile() {
    return (
        <section className="section-col py-5">
            <Avatar
                alt="Sreenadh M"
                src={dp}
                sx={{ width: 250, height: 250 }}
            />
            <div className="social-media">
                <a href="https://www.linkedin.com/in/sreenadh-m/" style={{ color: 'inherit' }}>
                    <IconButton color="inherit" aria-label="linkedin" component="label" className="hover-highlight" rel="noreferrer" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </IconButton>
                </a>
                <a href="mailto:sreenadhm01@gmail.com" style={{ color: 'inherit' }}>
                    <IconButton color="inherit" aria-label="upload picture" component="label" className="hover-highlight" rel="noreferrer" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-plus" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                    </IconButton>
                </a>
                <a href="tel:+32465271150" style={{ color: 'inherit' }}>
                    <IconButton color="inherit" aria-label="upload picture" component="label" className="hover-highlight" rel="noreferrer" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </IconButton>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+32465271150&text=Hi,%20I%20saw%20your%20profile%20and%20I'd%20like%20to%20connect!" style={{ color: 'inherit' }}>
                    <IconButton color="inherit" aria-label="upload picture" component="label" className="hover-highlight" rel="noreferrer" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </IconButton>
                </a>
                <a href="https://github.com/sr33nadhm" style={{ color: 'inherit' }}>
                    <IconButton color="inherit" aria-label="upload picture" component="label" className="hover-highlight" rel="noreferrer" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </IconButton>
                </a>
            </div>
            <div className="calendar mt-3">
                <a href="https://meetings.hubspot.com/sreenadh" style={{ color: 'inherit', textDecoration: "none" }}>
                    <Button variant="outlined" endIcon={<EventAvailable />}>
                        Schedule a call
                    </Button>
                </a>
            </div>
            <div className="about-me">
                <Typography variant="h6" component="h6" sx={{
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: "#817a7a"
                }}>
                    About me
                </Typography>
                <Typography variant="p" component="p" sx={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    textDecoration: 'none',
                    textAlign: "justify"
                }}>
                    I am a Full Stack developer with industrial experience in building websites and web applications. I specialize in Angular and Java Spring Boot, with professional experience working with Java Spring Boot, Node.js and Express.js on Back End side and Angular, React.js on Front End.
                </Typography>
                <Typography variant="h6" component="h6" sx={{
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: "#817a7a",
                    marginTop: "20px"
                }}>
                    Primary Skills
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ width: 90, height: 90 }} alt="UI" src="https://cdn2.iconfinder.com/data/icons/computer-hardware-pack/128/RESPONSIVE-DESIGN-512.png" />
                        </ListItemAvatar>
                        <ListItemText
                            className="list-item"
                            primary="Frontend Development"
                            secondary={
                                <>
                                    <Divider sx={{ marginBottom: "10px" }} />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Angular
                                    </Typography>
                                    {" — Previous experience working as Angular developer. In-depth knowledge of the framework and CLI. In-depth understanding of Angular components, their lifecycle hooks, data binding, event handling, routing and navigation, state management and handling unit tests."}
                                    <br /><br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        React.js
                                    </Typography>
                                    {" — Working with the UI/UX team and implementing designs. In-depth knowledge of JavaScript, CSS, HTML, and familiar with TypeScript. Knowledge of REACT tools including React.js, Webpack, Redux and MobX."}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ width: 90, height: 90 }} alt="Backend" src="https://cdn2.iconfinder.com/data/icons/computer-hardware-pack/128/SOFTWARE-ENGINEER-512.png" />
                        </ListItemAvatar>
                        <ListItemText
                            className="list-item"
                            primary="Backend Development"
                            secondary={
                                <>
                                    <Divider sx={{ marginBottom: "10px" }} />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Java Springboot
                                    </Typography>
                                    {" — 4+ years of experience in Springboot. Well versed with MVC architecture, dependency injection and IoC. Familiar with Microservices design, JPA, jUnit and message queues. Developed and deployed features for multiple projects for different clients in Java Spring Boot."}
                                    <br /><br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Node.js
                                    </Typography>
                                    {" — Developing high-performance applications by writing testable, reusable, and efficient code. Implementing effective security protocols, data protection measures, and storage solutions. Running diagnostic tests, repairing defects, and providing technical support."}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ width: 90, height: 90 }} alt="SQL" src="https://cdn2.iconfinder.com/data/icons/computer-hardware-pack/128/TABLE-512.png" />
                        </ListItemAvatar>
                        <ListItemText
                            className="list-item"
                            primary="Database Management"
                            secondary={
                                <>
                                    <Divider sx={{ marginBottom: "10px" }} />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        SQL
                                    </Typography>
                                    {" — MySQL, PostgreSQL, DB2, Oracle DB. Familiar with middleware and ORM tools like Hibernate, Objection and Knex.js"}
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        NoSQL
                                    </Typography>
                                    {" — MongoDB. Familiar with middleware libraries like Mongoose"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ width: 90, height: 90 }} alt="SQL" src="https://cdn2.iconfinder.com/data/icons/computer-hardware-pack/128/CLOUD-CODING-512.png" />
                        </ListItemAvatar>
                        <ListItemText
                            className="list-item"
                            primary="Cloud Technologies"
                            secondary={
                                <>
                                    <Divider sx={{ marginBottom: "10px" }} />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Amazon Web Services
                                    </Typography>
                                    {" — S3, EC2, CloudFront, Route 53, IAM"}
                                    <br />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Google Cloud Platform
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider component="li" />
                </List>
            </div>
        </section >
    )
}

export default Profile