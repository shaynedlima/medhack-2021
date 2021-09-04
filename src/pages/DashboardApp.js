// material
import {
  Alert,
  AlertTitle,
  Box,
  Card,
  CardHeader,
  Divider,
  Grid,
  Container,
  Typography,
  Stack,
  Avatar
} from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

import { mockImgAvatar } from '../utils/mockImages';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box> */}
        <Box sx={{ pb: 5 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt="Jerome" src={mockImgAvatar(4)} />
            <Typography variant="h4" noWrap>
              Jerome Heathcote
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ pb: 5 }}>
          <Card>
            <CardHeader title="Patient Summary" />
            <Stack spacing={3} sx={{ p: 3 }}>
              {/* <Avatar alt="Jerome" src={mockImgAvatar(4)} />
              <Typography variant="h4" noWrap>
                Jerome Heathcote
              </Typography> */}

              <Box>
                <Alert severity="error">
                  <AlertTitle>Patient symptoms deteriorating </AlertTitle>
                  Frequency of wet coughs have increased in the past
                  <br />
                  <strong>> Book patient consultation</strong>
                </Alert>
              </Box>
            </Stack>
          </Card>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={16} sm={8} md={4}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={16} sm={8} md={4}>
            <AppNewUsers />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid> */}
          <Grid item xs={16} sm={8} md={4}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={12} lg={16}>
            <AppWebsiteVisits />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
