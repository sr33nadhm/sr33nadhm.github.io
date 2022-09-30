import { Typography } from "@mui/material";
import faq from "../../assets/faq.json";

function FAQ() {
    return (
        <section className="section-row">
            <div className="faq">
                <Typography variant="h5" component="h5" sx={{
                    fontWeight: 600,
                    textDecoration: 'none',
                }}>
                    More information
                </Typography>
                <div className="q-n-a mt-3">
                    {
                        faq.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Typography variant="h6" component="h6" sx={{
                                        fontWeight: 500,
                                        textDecoration: 'none',
                                        color: '#898989'
                                    }}>
                                        {item.q}
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                        fontSize: 16,
                                        lineHeight: 1.5,
                                        textDecoration: 'none',
                                        textAlign: "justify",
                                        marginBottom: "15px"
                                    }}>
                                        {item.a}
                                    </Typography>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQ