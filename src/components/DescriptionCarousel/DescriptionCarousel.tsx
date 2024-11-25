import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Avatar, Grid, IconButton, MobileStepper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { DarkThemeHoveredCardColor, WhiteBackgroundColor } from "~/utils/Theme";
import { CarouselDescription } from "~/utils/Types";

const AVATAR_SIZE = 200;
const DESCRIPTION_CARD_HEIGHT = 400;
const cardContainerStyles = { borderRadius: "20px", backgroundColor: DarkThemeHoveredCardColor, width: "100%", height: DESCRIPTION_CARD_HEIGHT };
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

const avatarGridItemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
};

type DescriptionCarouselProps = {
    description: CarouselDescription[];
};

const DescriptionCarousel = (props: DescriptionCarouselProps): JSX.Element => {
    const { description } = props;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [activeStep, setActiveStep] = useState(0);

    const getValueAtPosition = (descriptionArray: CarouselDescription[], position: number): string | undefined => {
        return descriptionArray[position]?.description;
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container sx={{ ...cardContainerStyles, padding: 4, paddingLeft: 16, paddingRight: 16 }} alignItems="center" gap={16}>
            {!isMobile && !isSmallScreen && (
                <Grid item {...avatarGridItemStyles} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Avatar
                        alt="Florin"
                        src="\assets\images\Profile.png"
                        sx={{
                            maxWidth: AVATAR_SIZE,
                            maxHeight: AVATAR_SIZE,
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                        }}
                    />
                </Grid>
            )}

            <Grid
                item
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "space-between",
                    flex: 1,
                }}
            >
                <Stack
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        background: DarkThemeHoveredCardColor,
                        textAlign: "center",
                        wordWrap: "break-word",
                        width: "100%",
                    }}
                >
                    <Typography variant="h4" style={{ color: WhiteBackgroundColor }}>
                        {getValueAtPosition(description, activeStep)}
                    </Typography>
                </Stack>
                <Stack sx={{ width: "50%" }}>
                    <MobileStepper
                        variant="dots"
                        steps={Object.keys(description).length}
                        position="static"
                        activeStep={activeStep}
                        style={{ backgroundColor: DarkThemeHoveredCardColor }}
                        nextButton={
                            <IconButton size="small" onClick={handleNext} disabled={activeStep === Object.keys(description).length - 1}>
                                {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </IconButton>
                        }
                        backButton={
                            <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            </IconButton>
                        }
                    />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DescriptionCarousel;
