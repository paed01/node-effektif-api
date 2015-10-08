1.0.0 / 2015-10-01
==================

  * generator: 
    - operation callback signature changed from `function(err, resp, body)` to `function(err, body, resp)`
    - HTTP-status codes above 399 will return an error in callback with `body.message` if exists
    - ctor signature now takes `options`
    - Unauthenticated calls will be re-issued with new authorization token if `options.credentials` is specified in ctor
  * User:
    - Added utility function `login`
    - Renamed `createRegistrationActivate` to `activateRegistration`
  * Process:
    - Renamed `createProcesses` to `createProcess`
  * API.md: Added auto-generated API documentation