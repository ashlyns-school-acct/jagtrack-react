import { Container, Title, Text, Grid, Paper, Divider, Button, List, Group } from '@mantine/core'


function AboutPage() {

return (

  <Container size="xl" py="xl">

    <Paper shadow="sm" p="md" radius="md" withBorder>
      <Title order={2} ta="center" mb="md">About Me</Title>
    </Paper>
    
    <Divider my="xl" />

    <div className="content">

      <Paper shadow="sm" p="md" radius="md" withBorder>

        <img src='./about.png' 
        alt="About Me Image, featuring a cat, desktop programs, and art supplies"
        />

        <Text 
        ta="center" 
        c='var(--text-dark)'
        m='8px'
        fw='bold'
        >
          Ashlyn Wolfe - Grade 10
        </Text>

        <Group grow>

          <Text 
            ta="left" 
            c='var(--text-muted)'
            m='8px'
          >
            Interests:
            <List size="xs">
              <List.Item>Art</List.Item>
              <List.Item>Coding</List.Item>
              <List.Item>Animation</List.Item>
              <List.Item>Writing</List.Item>
              <List.Item>Video Games</List.Item>
            </List>
            
            <Divider m="8px"/>
          
            Favorite Subject: Technology

          </Text>

          <Text 
            ta="left" 
            c='var(--text-muted)'
            m='8px'
          >
            Goals:
            <List size="xs">
              <List.Item>Maintain a GPA above 3.5</List.Item>
              <List.Item>Gain at least an 80% in Chemistry and Spanish</List.Item>
              <List.Item>Apply for CU Boulder after graduating</List.Item>
              <List.Item>Achieve an art style I'm proud of</List.Item>
            </List>

          </Text>

          <Text 
            ta="left" 
            c='var(--text-muted)'
            m='8px'
          >
            Classes
            <Divider/>
            Favorites:
            <List size="xs">
              <List.Item>Technology [Fun! I like to spend my time coding.]</List.Item>
              <List.Item>Animation [Hobby turned into a class!]</List.Item>
              <List.Item>Art [I get to draw!]</List.Item>
            </List>
            <Divider m='8px'/>
            Currently learning:
            <List size="xs">
              <List.Item>American History from WWII to the Cold War</List.Item>
              <List.Item>How acidity affects shell formation</List.Item>
              <List.Item>How to use commands in spanish</List.Item>
            </List>
            <Divider m="8px"/>
            My most challenging class is <b>History</b>

          </Text>

          <Text 
            ta="left" 
            c='var(--text-muted)'
            m='8px'
          >
            Fun Facts
            <Divider m="8px"/>

            Favorites:
            <List size="xs">
              <List.Item>Book: The Princess Bride or The Hunger Games</List.Item>
              <List.Item>Game: Rain World</List.Item>
              <List.Item>Show: Battle for Dream Island Again or Inanimate Insanity (Season 2)</List.Item>
            </List>

            <Divider m="8px"/>

            <Text size="10px">
              One unique thing about me is that I can replicate a lot of sounds!
              This goes from meowing, to clicking, to imitating voices...
              You name it, really!
            </Text>

          </Text>

        </Group>

      </Paper>

    </div>

  </Container>
)
}

export default AboutPage