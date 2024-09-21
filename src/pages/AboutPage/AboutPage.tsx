import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { DarkThemeGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import SkillCard from "./SkillCard/SkillCard";
import { Skill } from "~/utils/Enums";

const whiteTextStyle: React.CSSProperties = {
    fontFamily: "Public Sans",
    fontWeight: "bold",
    fontSize: 32,
    color: WhiteBackgroundColor,
};

const grayTextStyle: React.CSSProperties = {
    fontFamily: "Public Sans",
    fontWeight: "bold",
    color: DarkThemeGrayAccentColor,
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
};

const AboutPage = (): JSX.Element => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const pageHeading = (
        <Grid container justifyContent={"center"} direction={"row"} alignItems={"center"} spacing={2}>
            {isSmallScreen ? (
                <></>
            ) : (
                <Grid item container xs={6} direction={"column"}>
                    <Grid item xs={6} container direction={"row"} display={"flex"} justifyContent={"end"}>
                        <Stack direction={"row"} spacing={2}>
                            <Box
                                component="span"
                                style={{
                                    fontSize: 64,
                                    transform: "scale(1.4, 1.4)",
                                    textAlign: "center",
                                    whiteSpace: "nowrap",
                                    marginRight: 4,
                                }}
                            >
                                <Typography style={grayTextStyle} fontSize={64}>
                                    C#
                                </Typography>
                            </Box>
                            <Stack direction={"column"}>
                                <Typography style={grayTextStyle} fontSize={32} display={"flex"} justifyContent={"end"}>
                                    Type
                                </Typography>
                                <Typography style={grayTextStyle} fontSize={32} display={"flex"} justifyContent={"end"}>
                                    Script
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} container direction={"row"} display={"flex"} justifyContent={"end"}>
                        <Stack direction={"row"} spacing={2}>
                            <Typography style={grayTextStyle} fontSize={32}>
                                Python
                            </Typography>
                            <Typography style={grayTextStyle} fontSize={32}>
                                C/C++
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            )}
            <Grid item xs={isSmallScreen ? 12 : 6} container direction={"column"}>
                <Typography style={whiteTextStyle}>Hi 👋</Typography>
                <Stack direction={"row"} gap={2}>
                    <Typography style={whiteTextStyle}>I'm</Typography>
                    <Typography
                        style={whiteTextStyle}
                        sx={{
                            background: "linear-gradient(to right, rgb(222, 91, 181), rgb(145, 70, 255))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Florin
                    </Typography>
                </Stack>
                <Typography style={whiteTextStyle}>Software Engineer</Typography>
            </Grid>
        </Grid>
    );

    const skills = (
        <Grid container justifyContent={"center"} alignItems={"center"} padding={12} gap={4}>
            <Grid item xs={12} container spacing={4}>
                <Grid item xs={4}>
                    <SkillCard skill={Skill.Csharp} />
                </Grid>
                <Grid item xs={4}>
                    <SkillCard skill={Skill.Typescript} />
                </Grid>
                <Grid item xs={4}>
                    <SkillCard skill={Skill.MongoDb} />
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent={"space-evenly"} spacing={4}> 
                <Grid item xs={4}>
                    <SkillCard skill={Skill.Python} />
                </Grid>
                <Grid item xs={4}>
                    <SkillCard skill={Skill.Cpp} />
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <div>
            {pageHeading}
            {skills}
            <Outlet />
        </div>
    );
};

export default AboutPage;
