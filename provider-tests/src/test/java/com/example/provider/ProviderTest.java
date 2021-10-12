package com.example.provider;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Logger;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestTemplate;
import org.junit.jupiter.api.extension.ExtendWith;

import au.com.dius.pact.provider.junit5.HttpTestTarget;
import au.com.dius.pact.provider.junit5.PactVerificationContext;
import au.com.dius.pact.provider.junit5.PactVerificationInvocationContextProvider;
import au.com.dius.pact.provider.junitsupport.Provider;
import au.com.dius.pact.provider.junitsupport.loader.PactFolder;

@Provider("test provider")
@PactFolder("pacts")
public class ProviderTest {

  @TestTemplate
  @ExtendWith(PactVerificationInvocationContextProvider.class)
  void pactVerificationTestTemplate(PactVerificationContext context) {
    context.verifyInteraction();
  }

  @BeforeEach
  void before(PactVerificationContext context) throws MalformedURLException {
    Logger.getLogger(getClass().getName()).info(new URL("http://localhost:4566/restapis/" + System.getProperty("REST_API_ID")  + "/local/_user_request_/").toString());
    context.setTarget(HttpTestTarget.fromUrl(
      new URL("http://localhost:4566/restapis/" + System.getenv("REST_API_ID")  + "/local/_user_request_/")
    ));
  }
}