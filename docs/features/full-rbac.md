# RBAC

Full Role based access control.

:::note Feature Request
Identity Provider Sync.
:::

### Implementation

Once you have authenticated with Backplane e.g. `bp auth login -e lewis@backplane.cloud -p *****`, your authorisation will be determined by the **roles** and **assignments**. These are then encoded into the JWT token which ensures the most expediant authZ evaluation.
