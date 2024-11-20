import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { DarkThemeGrayAccentColor, WhiteBackgroundColor } from "~/utils/Theme";
import SkillCard from "./SkillCard/SkillCard";
import { SkillEnum } from "~/utils/Enums";
import { HEADER_HEIGHT } from "~/utils/Constants";

const headerWhiteTextStyle: React.CSSProperties = {
    fontFamily: "Public Sans",
    fontWeight: "bold",
    fontSize: 32,
    color: WhiteBackgroundColor,
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
};

const headerGrayTextStyle: React.CSSProperties = {
    fontFamily: "Public Sans",
    fontWeight: "bold",
    color: DarkThemeGrayAccentColor,
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
};

const MIN_SKILL_CARD_WIDTH = 350;
const MAX_SKILL_CARD_WIDTH = 500;

const skillGridItemStyles = {
    display: "flex",
    alignSelf: "stretch",
    xs: 12,
    sm: 12,
    md: 12,
    lg: 4,
    xl: 4,
    minWidth: MIN_SKILL_CARD_WIDTH,
    maxWidth: MAX_SKILL_CARD_WIDTH,
};

const AboutPage = (): JSX.Element => {
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

    const pageHeading = (
        <Grid container justifyContent={"center"} direction={"row"} alignItems={"center"} spacing={2} height={"30vh"}>
            {isSmScreen ? (
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
                                <Typography style={headerGrayTextStyle} fontSize={64}>
                                    C#
                                </Typography>
                            </Box>
                            <Stack direction={"column"}>
                                <Typography style={headerGrayTextStyle} fontSize={32} display={"flex"} justifyContent={"end"}>
                                    Type
                                </Typography>
                                <Typography style={headerGrayTextStyle} fontSize={32} display={"flex"} justifyContent={"end"}>
                                    Script
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} container direction={"row"} display={"flex"} justifyContent={"end"}>
                        <Stack direction={"row"} spacing={2}>
                            <Typography style={headerGrayTextStyle} fontSize={32}>
                                Python
                            </Typography>
                            <Typography style={headerGrayTextStyle} fontSize={32}>
                                C/C++
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            )}
            <Grid item xs={isSmScreen ? 12 : 6} container direction={"column"}>
                <Typography style={headerWhiteTextStyle}>Hi 👋</Typography>
                <Stack direction={"row"} gap={2}>
                    <Typography style={headerWhiteTextStyle}>I'm</Typography>
                    <Typography
                        style={headerWhiteTextStyle}
                        sx={{
                            background: "linear-gradient(to right, rgb(222, 91, 181), rgb(145, 70, 255))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Florin
                    </Typography>
                </Stack>
                <Typography style={headerWhiteTextStyle}>Software Engineer</Typography>
            </Grid>
        </Grid>
    );

    const skills = (
        <Grid container justifyContent="center" alignItems="center" gap={8}>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Grid item {...skillGridItemStyles} justifyContent={isXlScreen ? "end" : "center"} height={"100%"}>
                    <SkillCard skill={SkillEnum.Csharp} />
                </Grid>
                <Grid item {...skillGridItemStyles} justifyContent="center">
                    <SkillCard skill={SkillEnum.Typescript} />
                </Grid>
                <Grid item {...skillGridItemStyles} justifyContent={isXlScreen ? "start" : "center"}>
                    <SkillCard skill={SkillEnum.Database} />
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Grid item {...skillGridItemStyles} justifyContent="center">
                    <SkillCard skill={SkillEnum.Python} />
                </Grid>
                <Grid item {...skillGridItemStyles} justifyContent="center">
                    <SkillCard skill={SkillEnum.Cpp} />
                </Grid>
            </Grid>
        </Grid>
    );

    return (
        <Stack gap={16} sx={{ position: "relative", zIndex: 1, display: "flex", alignSelf: "center", height: `calc(90vh - ${HEADER_HEIGHT})` }}>
            {pageHeading}
            {skills}
        </Stack>
    );
};

export default AboutPage;
