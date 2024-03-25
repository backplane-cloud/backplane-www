import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CLI

### Install CLI

Download the Backplane CLI either from NPM or a pre-compiled binary for your OS.

<Tabs>
   
<TabItem value="Binaries" label="Binaries" default>
Choose the binary for your OS:
      <Tabs>
            <TabItem value="Mac OS" label="Mac OS" default>
                  [backplane-cli-macos.zip](/cli/backplane-cli-macos.zip)
            </TabItem>

      <TabItem value="Windows" label="Windows">
            [bp.exe.zip](/cli/bp.exe.zip)
      </TabItem>
      <TabItem value="Linux" label="Linux">
            [backplane-cli-linux.zip](/cli/backplane-cli-linux.zip)
      </TabItem>
    </Tabs>

  </TabItem>
   <TabItem value="NPM" label="NPM">
  `npm i @backplane-software/cli`
  </TabItem>
  
</Tabs>

## Open Terminal

Place the executable in the your path. Then to check, run:

```
bp --version
```

and if it shows `1.0.0` then the CLI is successfully installed.
