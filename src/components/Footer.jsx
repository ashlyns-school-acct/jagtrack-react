import { Container, Text, Group } from '@mantine/core'
import { getCurrentTheme } from '../themeToggle'
import React, { useState } from 'react';


function Footer({ schoolName, email }) {
 const currentYear = new Date().getFullYear()
 const [theme, setTheme] = useState(getCurrentTheme);
 const handleTheme = () => {
    setTheme(getCurrentTheme())
  }

 return (
    <footer style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
      
      <Container size="xl">

        <Group justify="space-between" align="center">
         <Text size="sm" c='var(--text-muted)'>
          © {currentYear} {schoolName}
         </Text>

         <Text size="sm" c='var(--text-muted)'>
          Contact: {email}
         </Text>
         
         <Text 
         size="xs"
         c='var(--text-muted)'
         ta="center" 
         onMouseEnter={handleTheme} // unfortunately there is seemingly no listener for things happening elsewhere on the page, but this now updates when hovered over at least i guess
         >
          Current theme: {theme === 'dark' ? '🌙 Dark Mode' : theme === 'forest' ? '🌳 Forest Mode (Custom)' : '☀️ Light Mode'}
         </Text>

        </Group>

      </Container>

    </footer>
 )
}

export default Footer
