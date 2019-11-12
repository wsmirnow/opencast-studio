//; -*- mode: rjsx;-*-
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Link } from '@reach/router';
import { Box } from '@theme-ui/components';

const Container = props => <Box sx={{ maxWidth: 960, mx: 'auto', px: 3 }} {...props} />;

const Code = props => (
  <Box
    sx={{
      background: '#f4f4f4',
      color: '#666',
      border: '1px solid #ddd',
      borderLeft: '3px solid #f36d33',
      fontFamily: 'monospace',
      lineHeight: 'body',
      my: 3,
      px: 3,
      py: 2,
      maxWidth: '100%',
      overflow: 'auto',
      pageBreakInside: 'avoid',
      wordWrap: 'break-word'
    }}
    {...props}
  />
);

function About(props) {
  return (
    <Container className={props.className}>
      <article>
        <header>
          <Styled.h1>Opencast Studio</Styled.h1>
        </header>
        <Styled.p>
          A web-based recording studio for <Styled.a href="https://opencast.org">Opencast</Styled.a>
          .
        </Styled.p>
        <Styled.p>
          This is free software under the terms of the{' '}
          <Styled.a href="https://github.com/elan-ev/opencast-studio/blob/master/LICENSE">
            MIT License
          </Styled.a>{' '}
          developed by the <Styled.a href="https://elan-ev.de">ELAN e.V.</Styled.a> in cooperation
          with the <Styled.a href="https://ethz.ch">ETH Zürich</Styled.a>. Please report bugs or
          submit new features on the project's{' '}
          <Styled.a href="https://github.com/elan-ev/opencast-studio">GitHub page</Styled.a>.
        </Styled.p>
        <Styled.p>
          If you are interested in additional development or integrations into specific tools (e.g.
          LMS), please contact{' '}
          <Styled.a href="mailto:opencast-support@elan-ev.de">opencast-support@elan-ev.de</Styled.a>
          .
        </Styled.p>
        <Styled.h2>How it works</Styled.h2>
        <Styled.p>
          Opencast Studio uses the recording capabilities build into browsers to record audio and
          video streams. The recording happens in the user's browser. Finally, the recording is
          transferred directly from the users browser to the target Opencast.
        </Styled.p>
        <Styled.h2>Allow Studio to interact with your Opencast</Styled.h2>
        <Styled.p>
          For Studio to work with your Opencast, your need to allow this on your Opencast by serving
          a special HTTP header. The mechanism used is called{' '}
          <Styled.a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">
            Cross-Origin Resource Sharing
          </Styled.a>
          .
        </Styled.p>
        <Styled.p>Here is a list of the required headers Nginx's configuration format:</Styled.p>
        <Code>
          # Basic open CORS for studio.opencast.org
          <br />
          add_header Access-Control-Allow-Origin https://studio.opencast.org;
          <br />
          add_header Access-Control-Allow-Methods 'GET, POST';
          <br />
          add_header Access-Control-Allow-Credentials true;
          <br />
          add_header Access-Control-Allow-Headers 'Origin,Content-Type,Accept,Authorization';
        </Code>
        <Styled.p>
          For a complete configuration file, take a look at the{' '}
          <Styled.a href="https://github.com/opencast/opencast-project-infrastructure/blob/9f09638e922d623cd4d3c91dd90aca39c421530d/ansible-allinone-demo-vm/roles/nginx/templates/nginx.conf#L158-L162">
            test server configuration
          </Styled.a>
          .
        </Styled.p>

        <Styled.h2>Credits</Styled.h2>
        <Styled.p>
          Thanks to the following people and institutions for contributing to this project:
        </Styled.p>
        <ul>
          <li>
            <Styled.p>
              <Styled.a href="https://github.com/slampunk">Duncan Smith</Styled.a> for starting this
              project
            </Styled.p>
          </li>
          <li>
            <Styled.p>
              <Styled.a href="https://github.com/cilt-uct">University of Cape Town (CILT)</Styled.a>
              for letting Duncan start the project
            </Styled.p>
          </li>
          <li>
            <Styled.p>
              <Styled.a href="https://ethz.ch">ETH Zürich</Styled.a> for financial support and
              testing
            </Styled.p>
          </li>
          <li>
            <Styled.p>
              <Styled.a href="https://github.com/elan-ev">ELAN e.V.</Styled.a> for the final
              development
            </Styled.p>
          </li>
        </ul>
        <Box as="footer" sx={{ py: 3, textAlign: 'center' }}>
          <Link to="/">← Back to the Studio</Link>
        </Box>
      </article>
    </Container>
  );
}

export default About;