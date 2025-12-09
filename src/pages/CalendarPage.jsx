import { Container, Title, Text, Paper } from '@mantine/core'
import './CalendarPage.css'

function CalendarPage() {
return (
  <Container size="xl" py="xl">
    <Title order={2} ta="center" mb="md">Calendar & Deadlines</Title>
    <Text ta="center" c="dimmed" mb="xl">
      Your Canvas assignments automatically sync to this calendar. Never miss a deadline!
    </Text>




    <Paper shadow="sm" p="md" radius="md" withBorder>
      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showPrint=0&src=YXNobHluLndvbGZlQGphamFncy5jb20&src=Y183ZDk5NmM5ODJkZGZlOTQ1ZTgyMTcyYjZlZTRkODgxZmVjNTM0MjIzOTU4MzQ2YjI0OGNhNWFlMTEzNjg4YTYxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb21hN2E3MDlmN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZHY2czdkZTk2dnZlNmoybGs1azZvM3Q5NnBhbTcycXRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21hYTczZTg4MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23e4c441&color=%23b80672&color=%23039be5&color=%230b8043&color=%23202124"
          className="google-calendar"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Paper>




    <Text size="sm" c="dimmed" ta="center" mt="md" className="mobile-tip">
      <strong>Mobile Tip:</strong> For a better experience on small screens,{' '}
      <a href="https://calendar.google.com/calendar/ical/dv6s7de96vve6j2lk5k6o3t96pam72qt%40import.calendar.google.com/public/basic.ics" target="_blank" rel="noopener noreferrer">
        open calendar in new tab
      </a>
    </Text>
  </Container>
)
}




export default CalendarPage